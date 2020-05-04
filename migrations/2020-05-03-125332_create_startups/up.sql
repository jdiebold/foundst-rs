-- Your SQL goes here
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE startups (
    id uuid DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL,
    keyword VARCHAR Not NULL,
    value_proposition VARCHAR not NULL,
    color_scheme TEXT[],
    PRIMARY KEY(id)
);

insert into startups(name, keyword, value_proposition, color_scheme) VALUES ('Foundster', 'Founding', 'Founding as a lifestyle',ARRAY['color1','color2','color3', 'color4'])
