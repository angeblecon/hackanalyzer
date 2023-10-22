import scss from './GithubInsights.scss';
import GithubLogo from './GithubLogo';

export default function GithubInsights({ insigths }) {

  return (
    <div id='github-insights-container'>
      <span id='title'>
        <GithubLogo />Insigths
      </span>
      <div id='columns'>
        <div id='languages-container'>
          <span><b>Languages used</b></span>
          {insigths.languages && Object.entries(insigths.languages).sort((a, b) => b[1] - a[1]).map(l => (
            <div className='language' key={l[0]}>
              {l[0]} ({l[1]} lines)
            </div>
          ))}
        </div>
        <div id='members-container'>
          <span><b>Members collaboration</b></span>
          {insigths.collaboration && Object.entries(insigths.collaboration).sort((a, b) => b[1] - a[1]).map(l => (
            <div className='collaboration' key={l[0]}>
              {l[0]} ({l[1]} changes)
            </div>
          ))}
        </div>
      </div>
      <style jsx>{scss}</style>
    </div>
  )
};