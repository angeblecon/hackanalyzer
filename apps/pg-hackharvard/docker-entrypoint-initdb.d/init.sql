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
-- Name: keyword; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.keyword (
    id text NOT NULL,
    keywords character varying[]
);


ALTER TABLE public.keyword OWNER TO postgres;

--
-- Name: project; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.project (
    id text NOT NULL,
    title text,
    tagline text,
    description text,
    tags character varying[],
    github_link text,
    other_links character varying[],
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    members character varying[]
);


ALTER TABLE public.project OWNER TO postgres;

--
-- Name: similarity_result; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.similarity_result (
    id text NOT NULL,
    project_a text NOT NULL,
    project_b text NOT NULL,
    similarity_result jsonb[] NOT NULL
);


ALTER TABLE public.similarity_result OWNER TO postgres;

--
-- Data for Name: keyword; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.keyword (id, keywords) FROM stdin;
\.


--
-- Data for Name: project; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.project (id, title, tagline, description, tags, github_link, other_links, created_at, members) FROM stdin;
\.


--
-- Data for Name: similarity_result; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.similarity_result (id, project_a, project_b, similarity_result) FROM stdin;
\.


--
-- Name: keyword primary; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.keyword
    ADD CONSTRAINT "primary" PRIMARY KEY (id);


--
-- Name: project project_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.project
    ADD CONSTRAINT project_pkey PRIMARY KEY (id);


--
-- Name: similarity_result similarity_result_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.similarity_result
    ADD CONSTRAINT similarity_result_pkey PRIMARY KEY (id);


--
-- Name: keyword id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.keyword
    ADD CONSTRAINT id FOREIGN KEY (id) REFERENCES public.project(id);


--
-- Name: similarity_result project_a; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.similarity_result
    ADD CONSTRAINT project_a FOREIGN KEY (id) REFERENCES public.keyword(id);


--
-- PostgreSQL database dump complete
--

