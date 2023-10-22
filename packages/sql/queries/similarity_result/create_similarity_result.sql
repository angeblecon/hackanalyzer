INSERT INTO project (title, tagline, description, tags, members, github_link, other_links)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING id;

