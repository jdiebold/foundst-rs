#[deny(warnings)]
use std::io;
use std::sync::Arc;

#[macro_use]
extern crate diesel;

use actix_cors::Cors;
use actix_web::{get, web, App, Error, HttpResponse, HttpServer, Responder};
use juniper::http::graphiql::graphiql_source;
use juniper::http::GraphQLRequest;

mod graphql_schema;
mod handlers;
mod schema;

use crate::graphql_schema::{create_schema, Schema};

#[actix_rt::main]
async fn main() -> io::Result<()> {
    let schema = std::sync::Arc::new(create_schema());
    HttpServer::new(move || {
        App::new()
            .wrap(Cors::new().finish())
            .data(schema.clone())
            .service(index)
            .service(web::resource("/graphql").route(web::post().to(graphql)))
            .service(web::resource("/graphiql").route(web::get().to(graphiql)))
    })
    .bind("localhost:8080")?
    .run()
    .await
}

#[get("/")]
async fn index() -> impl Responder {
    String::from("Please go to '/graphiql'>GraphiQL")
}

async fn graphiql() -> HttpResponse {
    let html = graphiql_source("http://localhost:8080/graphql");
    HttpResponse::Ok()
        .content_type("text/html; charset=utf-8")
        .body(html)
}

async fn graphql(
    st: web::Data<Arc<Schema>>,
    data: web::Json<GraphQLRequest>,
) -> Result<HttpResponse, Error> {
    let user = web::block(move || {
        let res = data.execute(&st, &());
        Ok::<_, serde_json::error::Error>(serde_json::to_string(&res)?)
    })
    .await?;
    Ok(HttpResponse::Ok()
        .content_type("application/json")
        .body(user))
}
