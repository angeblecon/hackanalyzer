
#!/bin/bash

source ./.env

services=(pg-hackharvard)
for service in "${services[@]}"
do
  container=$(docker ps --filter "name=${service}" --format "{{.ID}}" -n 1)
  if [ -z "$container" ]; then
    exit 1
  fi

  uppercase_service=$(echo "$service" | tr '[:lower:]' '[:upper:]')
  underscore_service=$(echo $uppercase_service | tr '-' '_')
  service_username="${underscore_service}_USERNAME"
  service_password="${underscore_service}_PASSWORD"
  service_port="${underscore_service}_PORT"
  service_database_name="${underscore_service}_DATABASE_NAME"

  max_retries=20
  counter=0

  until (docker exec -e PGPASSWORD=${!service_password} $(docker ps --filter "name=${service}" --format "{{.ID}}" -n 1) pg_isready -h ${service} -p ${!service_port} -U ${!service_username}) || [ $counter -eq $max_retries ]
  do
    echo "Waiting for ${service}";
    sleep 3;
    ((counter++))
  done;

  if [ $counter -eq $max_retries ]; then
    echo "Failed to connect to ${service} after $max_retries attempts."
  else
    container=$(docker ps --filter "name=${service}" --format "{{.ID}}" -n 1);
    mkdir -p ./apps/${service}/backups

    docker exec -e PGPASSWORD=${!service_password} ${container} pg_dump --create -U ${!service_username} ${!service_database_name} | gzip > ./apps/${service}/backups/dump_$(date +"%Y-%m-%d_%H_%M_%S").gz;
    docker exec -e PGPASSWORD=${!service_password} -t ${container} pg_dump --create --dbname=postgresql://${!service_username}:${!service_password}@127.0.0.1:${!service_port}/${!service_database_name} --username=${!service_username} > ./apps/${service}/docker-entrypoint-initdb.d/init.sql;
  fi
done