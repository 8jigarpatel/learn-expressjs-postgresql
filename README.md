# Learn Express and PostgreSQL

## Technologies:
- Express (https://expressjs.com/)
- PostgreSQL (https://www.postgresql.org/)

---

## How-to

### Add migrations

#### After any schema change:

1. Generate migration with `{migrationname}` name
    ```
    npm run migration:generate --name={migrationname}
    ```

2. Fix up lint/prettier things in the newly generated `{migrationname}.ts` file (in data/migrations directory)

3. Add newly generated migration file in the `migrations` field of the `DataSource` in `data-source.ts` file

4. run `npm run build` and `npm run start` to 'push' migrations to the database

#### Adding a manual migration

To add a manual migration with `{migrationname}` name, run:
`npm run migration:create --name={migrationname}`

- More info about TypeORM migrations: https://typeorm.io/migrations


### Run Postgres and PgAdmin4 docker containers locally for development

### Postgres
```
docker pull postgres

docker run -d \
--restart unless-stopped \
--name postgres \
-p 5432:5432 \
-e POSTGRES_USER=postgres \
-e POSTGRES_PASSWORD=pgadmin \
-e PGDATA=/var/lib/postgresql/data/pgdata \
-v v_postgres:/var/lib/postgresql/data \
postgres

# for non-dev Deployment
docker run -d \
--restart unless-stopped \
--name postgres \
-p 5432:5432 \
-e POSTGRES_USER=username \
-e POSTGRES_PASSWORD=password \
-e PGDATA=/var/lib/postgresql/data/pgdata \
-v v_postgres:/var/lib/postgresql/data \
-e "VIRTUAL_HOST=postgres.yourdomain.win" \
-e "LETSENCRYPT_HOST=postgres.yourdomain.win" \
-e "LETSENCRYPT_EMAIL=email@email.com" \
postgres
```

### PgAdmin4

```
docker pull dpage/pgadmin4

docker run -d \
--restart unless-stopped \
--name pgadmin4 \
-p 8082:80 \
-e PGADMIN_DEFAULT_EMAIL=pg@admin.com \
-e PGADMIN_DEFAULT_PASSWORD=pgadmin \
-v v_pgadmin4:/var/lib/pgadmin \
dpage/pgadmin4

# for non-dev Deployment
docker run -d \
--restart unless-stopped \
--name pgadmin4 \
-e PGADMIN_DEFAULT_EMAIL=email@email.com \
-e PGADMIN_DEFAULT_PASSWORD=password \
-e "VIRTUAL_HOST=pgadmin4.yourdomain.com" \
-e "LETSENCRYPT_HOST=pgadmin4.yourdomain.com" \
-e "LETSENCRYPT_EMAIL=email@email.com" \
-v v_pgadmin4:/var/lib/pgadmin \
dpage/pgadmin4
```

To use PgAdmin4 locally:
- visit http://localhost:8082/ and login using the creds specified in `docker run` command for PgAdmin4 above
- Add a new server with
  - General > Name: postgres
  - Connection > Host name/address: host.docker.internal
  - Connection > Port: 5432
  - Connection > Username: postgres (from `docker run` command above)
  - Connection > Password: pgadmin (from `docker run` command above)
  - Connection > Save Passowrd: On/Off (On for ease of use)

---

### Useful resources:
- [How To Use TypeScript With Express & Node](https://www.youtube.com/watch?v=qy8PxD3alWw)