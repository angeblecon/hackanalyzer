INSERT INTO similarity_result (id, project_a, project_b, similarity_result)
VALUES (${id}, ${project_a}, ${project_b}, ${similarity_result})
RETURNING id;

