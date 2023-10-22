INSERT INTO project (title, tagline, "description", tags, members, github_link, other_links)
VALUES (${title}, ${tagline}, ${description}, ${tags}, ${members}, ${github_link}, ${other_links})
RETURNING id;

