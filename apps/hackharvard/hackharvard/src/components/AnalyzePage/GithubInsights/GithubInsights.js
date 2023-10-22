import scss from './GithubInsights.scss';
import GithubLogo from './GithubLogo';

export default function GithubInsights() {

  return (
    <div id='github-insights-container'>
      <span id='title'>
        <GithubLogo />Insigths
      </span>
      <style jsx>{scss}</style>
    </div>
  )
};