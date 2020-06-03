table! {
    startups (id) {
        id -> Uuid,
        name -> Varchar,
        keyword -> Varchar,
        value_proposition -> Varchar,
        color_scheme -> Nullable<Array<Text>>,
    }
}
