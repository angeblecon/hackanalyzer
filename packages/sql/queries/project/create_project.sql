INSERT INTO project (id, title, tagline, images, "description", tags, members, github_link, links)
VALUES (${id},${title}, ${tagline}, ${images}, ${description}, ${tags}, ${members}, ${github_link}, ${links})
RETURNING id;

