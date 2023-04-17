DROP TABLE IF EXISTS saved_members;


CREATE TABLE IF NOT EXISTS saved_members (
    id SERIAL NOT NULL PRIMARY KEY,
    name_first VARCHAR(50) NOT NULL,
    name_last VARCHAR(50) NOT NULL,
    dob_age INT NOT NULL,
    dob_date VARCHAR(50) NOT NULL,
    email VARCHAR(200) UNIQUE NOT NULL,
    street_number INT NOT NULL,
    street_name VARCHAR(200) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    postcode VARCHAR(50) NOT NULL,
    thumbnail VARCHAR(200) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    uuid VARCHAR(50) UNIQUE NOT NULL,
    CONSTRAINT check_email_uuid UNIQUE (email, uuid)
);
