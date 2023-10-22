import { useEffect, useState, useCallback } from 'react';
import scss from './AnalyzePage.scss';
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
      console.log(decoder.decode(value));
      const json = JSON.parse(decoder.decode(value));
      console.log({ json });
      setData(d => ({ ...d, ...json }));
    }
  }, [setData]);

  useEffect(() => {
    if (id) getProject(id);
  }, [getProject, id]);

  console.log({ data });

  return (
    <div className='container'>
      <div className='block'>
        <Header project={data?.project} />
        {data?.githubInsights &&
          <GithubInsights insigths={data?.githubInsights} />
        }
        {data?.similarProjects &&
          <SimilarProjects similarProjects={data?.similarProjects} />
        }
        <div id='gradient' />
      </div>
      <style jsx>{scss}</style>
    </div>
  );
};