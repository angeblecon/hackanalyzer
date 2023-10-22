UPDATE project
SET 
    title = ${title},
    tagline = ${tagline},
    "description" = ${description},
    tags = ${tags},
    members = ${members},
    github_link = ${github_link},
    other_links = ${other_links}
WHERE id = ${id};
