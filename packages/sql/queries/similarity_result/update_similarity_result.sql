UPDATE similarity_result
SET 
    project_a = ${project_a},
    project_b = ${project_b},
    similarity_result = ${similarity_result}
WHERE id = ${id};
