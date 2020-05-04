extern crate hyphenation;

use crate::graphql_schema::NewStartup;
use hyphenation::*;

pub fn generate_startup(input_keyword: String) -> NewStartup {
    let my_keyword = input_keyword.clone();
    let startup_name = generate_startup_name(&input_keyword);
    NewStartup {
        keyword: my_keyword,
        name: startup_name,
        value_proposition: format!("Using Quantum Computing for {}", input_keyword),
        color_scheme: Some(vec![
            String::from("color1"),
            String::from("color2"),
            String::from("color3"),
        ]),
    }
}

fn generate_startup_name(input_keyword: &String) -> String {
    let en_us =
        Standard::from_embedded(Language::EnglishUS).expect("Error loading Language package");
    let hyphenated = en_us.hyphenate(&input_keyword);
    let mut segments = hyphenated.into_iter();
    let mut result = segments.nth(0).expect("No word entered");
    let len = result.len();
    result.truncate(len - 1);
    result.push_str("ster");
    result
}

#[test]
fn generate_startup_name_test() {
    let keyword = String::from("Fishing");
    assert_eq!(generate_startup_name(&keyword), "Fishster");
}
