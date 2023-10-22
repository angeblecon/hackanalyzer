INSERT INTO keyword (id, keywords)
VALUES (${id}, ${keywords})
RETURNING id;
