CREATE TABLE users (
    id serial PRIMARY KEY,
    email VARCHAR(250) UNIQUE NOT NULL
);

CREATE TABLE users_auth (
    id serial PRIMARY KEY,
    user_id INT UNIQUE REFERENCES users(id),
    password TEXT
);

CREATE TABLE todos (
    id serial PRIMARY KEY,
    user_id INT REFERENCES users(id),
    text VARCHAR(200),
    completed BOOLEAN
); 