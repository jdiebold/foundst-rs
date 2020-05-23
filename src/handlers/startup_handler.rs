extern crate hsluv;
extern crate hyphenation;
extern crate palette;
extern crate rand;

use crate::graphql_schema::NewStartup;
use hsluv::*;
use hyphenation::*;
use palette::{Hue, IntoColor, Srgb};
use rand::prelude::*;

pub fn generate_startup(input_keyword: String) -> NewStartup {
    let my_keyword = input_keyword.clone();
    let startup_name = generate_startup_name(&input_keyword);
    NewStartup {
        keyword: my_keyword,
        name: startup_name,
        value_proposition: format!("Using Quantum Computing for {}", input_keyword),
        color_scheme: generate_color_scheme(),
    }
}

fn generate_color_scheme() -> Option<Vec<String>> {
    let base_color: Srgb<f64> = Srgb::new(random(), random(), random());
    let complementary: Srgb<f64> = Srgb::from(base_color.into_lch().shift_hue(180.0));
    Some(vec![
        rgb_to_hex(base_color.into_components()),
        rgb_to_hex(complementary.into_components()),
    ])
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

#[test]
fn generate_color_scheme_test() {
    let color_scheme = generate_color_scheme();
    for color in color_scheme.unwrap() {
        hex_to_rgb(&color);
    }
}
