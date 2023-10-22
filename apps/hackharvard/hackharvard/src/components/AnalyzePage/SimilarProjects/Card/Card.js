import scss from './Card.scss';

export default function Card({ project, similarityAnalysis, setSelectedProject }) {

  return (
    <div className='similar-project' key={'similar' + project.id} onClick={() => similarityAnalysis && setSelectedProject({ project, similarityAnalysis })}>
      <span>{project.title}</span>
      {similarityAnalysis && ['objectiveApproach', 'targetUser', 'thematicFocus', 'overallScore'].map(e => (
        <span key={project.id + e}>
          {similarityAnalysis[e].similarityScore}<span className='over-ten'>/10</span>
        </span>
      ))}
      <style jsx>{scss}</style>
    </div>
  )
};