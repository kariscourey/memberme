DROP TABLE IF EXISTS saved_members;


CREATE TABLE IF NOT EXISTS saved_members (
    id SERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(200) UNIQUE NOT NULL,
    postal_address VARCHAR(200) NOT NULL,
    dob VARCHAR(50) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    uuid VARCHAR(50) UNIQUE NOT NULL,
    CONSTRAINT check_email_uuid UNIQUE (email, uuid)
);
