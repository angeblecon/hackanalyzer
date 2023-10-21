-- install_packages git build-essential
-- cd /tmp
-- git clone --branch v0.4.1 https://github.com/pgvector/pgvector.git
-- cd pgvector
-- export PG_CONFIG=/opt/bitnami/postgresql/bin/pg_config
-- make
-- make install

CREATE EXTENSION vector;

CREATE TABLE public."Information"
(
    "informationID" uuid NOT NULL DEFAULT uuid_generate_v4(),
    vector vector NOT NULL,
    content text NOT NULL,
    metadata jsonb,
    PRIMARY KEY ("informationID")
);

ALTER TABLE IF EXISTS public."Information"
    OWNER to postgres;

ALTER TABLE IF EXISTS public."Information"
    ALTER COLUMN metadata SET DEFAULT '{}';

ALTER TABLE IF EXISTS public."Information"
    ALTER COLUMN metadata SET NOT NULL;

ALTER TABLE IF EXISTS public."Information"
    ALTER COLUMN metadata DROP NOT NULL;

CREATE FUNCTION public.add_vector_metadata_default_value()
    RETURNS trigger
    LANGUAGE 'plpgsql'
     NOT LEAKPROOF
AS $BODY$
BEGIN
	IF (NEW.metadata IS NULL) THEN
		NEW.metadata = '{}'::jsonb;
	END IF;
	RETURN NEW;
END
$BODY$;

ALTER FUNCTION public.add_vector_metadata_default_value()
    OWNER TO postgres;

COMMENT ON FUNCTION public.add_vector_metadata_default_value()
    IS 'Add {} when metadata is null.';

CREATE TRIGGER information_add_metadata_default_value
    BEFORE INSERT OR UPDATE OF metadata
    ON public."Information"
    FOR EACH ROW
    WHEN (NEW.metadata IS NULL)
    EXECUTE FUNCTION public.add_vector_metadata_default_value();

ALTER TABLE IF EXISTS public."Information"
    ALTER COLUMN metadata SET NOT NULL;

ALTER FUNCTION public.add_vector_metadata_default_value()
    RENAME TO add_information_metadata_default_value;