import { useEffect, useState, useCallback } from 'react';
import css from './AnalyzePage.scss';
import { useSearchParams } from 'next/navigation';
import Header from './Header';
import GithubInsights from './GithubInsights';
import SimilarProjects from './SimilarProjects';

export default function AnalyzePage() {
  const [data, setData] = useState();
  const searchParams = useSearchParams()
  const id = searchParams.get('id');

  const getProject = useCallback(async () => {
    const response = await fetch(`api/project/${id}`);
    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      const json = JSON.parse(decoder.decode(value));
      console.log({ json });
      setData(json);
    }
  }, [setData]);

  useEffect(() => {
    if (id) getProject(id);
  }, [getProject, id]);

  return (
    <>
      {/* <Header project={data?.project} />
      <GithubInsights insigths={data?.githubInsights} />
      <SimilarProjects similarProjects={data?.similarProjects} /> */}
      <div id='gradient' />
      <style jsx>{css}</style>
    </>
  );
};