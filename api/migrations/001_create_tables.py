steps = [
    [
        # Create table
        """
        CREATE TABLE IF NOT EXISTS saved_members (
            id SERIAL NOT NULL PRIMARY KEY,
            first_name VARCHAR(50) NOT NULL,
            last_name VARCHAR(50) NOT NULL,
            age INT NOT NULL,
            email VARCHAR(200) NOT NULL,
            postal_address VARCHAR(200) NOT NULL,
            dob VARCHAR(50) NOT NULL,
            phone VARCHAR(50) NOT NULL,
        );
        """,
        # Drop table
        """
        DROP TABLE saved_members;
        """,
    ],
]
