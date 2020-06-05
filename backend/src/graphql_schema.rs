extern crate dotenv;

use diesel::prelude::*;
use diesel::PgConnection;
use dotenv::dotenv;
use juniper::RootNode;
use std::env;
use uuid::Uuid;

use crate::handlers::startup_handler;
use crate::schema::startups;

#[derive(juniper::GraphQLObject, Queryable)]
#[graphql(description = "A startup that is about to disrupt an industry")]
struct Startup {
    id: Uuid,
    name: String,
    keyword: String,
    value_proposition: String,
    color_scheme: Option<Vec<String>>,
}

#[derive(juniper::GraphQLInputObject, Insertable, Debug)]
#[table_name = "startups"]
#[graphql(description = "A startup that is about to disrupt an industry")]
pub struct NewStartup {
    pub name: String,
    pub keyword: String,
    pub value_proposition: String,
    pub color_scheme: Option<Vec<String>>,
}

fn establish_connection() -> PgConnection {
    dotenv().ok();
    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    PgConnection::establish(&database_url).expect(&format!("Error connecting to {}", database_url))
}

pub struct Query;

#[juniper::object]
impl Query {
    fn list_startups() -> Vec<Startup> {
        use crate::schema::startups::dsl::*;
        let connection = establish_connection();
        startups
            .load::<Startup>(&connection)
            .expect("Error loading startups")
    }
    fn startup(selected_id: Uuid) -> Startup {
        use crate::schema::startups::dsl::*;
        let id_string = &selected_id.to_string();
        let connection = establish_connection();
        startups
            .find(&selected_id)
            .first(&connection)
            .expect("Error loading startup by ID")
    }
}

pub struct MutationRoot;

#[juniper::object]
impl MutationRoot {
    fn generate_startup(keyword: String) -> Startup {
        let connection = establish_connection();
        let new_startup = startup_handler::generate_startup(keyword);
        diesel::insert_into(startups::table)
            .values(&new_startup)
            .get_result(&connection)
            .expect("Error saving new startup")
    }
}

pub type Schema = RootNode<'static, Query, MutationRoot>;

pub fn create_schema() -> Schema {
    Schema::new(Query {}, MutationRoot {})
}
