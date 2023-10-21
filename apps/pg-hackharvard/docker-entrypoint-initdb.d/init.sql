--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1
-- Dumped by pg_dump version 15.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: hackharvard-db; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "hackharvard-db" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';


ALTER DATABASE "hackharvard-db" OWNER TO postgres;

\connect -reuse-previous=on "dbname='hackharvard-db'"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Test; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Test" (
    "testColumn" character varying(255) NOT NULL
);


ALTER TABLE public."Test" OWNER TO postgres;

--
-- Data for Name: Test; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Test" ("testColumn") FROM stdin;
Hello
World
\.


--
-- Name: Test Test_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Test"
    ADD CONSTRAINT "Test_pkey" PRIMARY KEY ("testColumn");


--
-- PostgreSQL database dump complete
--

