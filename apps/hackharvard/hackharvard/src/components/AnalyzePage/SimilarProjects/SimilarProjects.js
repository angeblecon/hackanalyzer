import { useState } from 'react';
import scss from './SimilarProjects.scss';

export default function SimilarProjects({ similarProjects }) {
  const [sorting, setSorting] = useState('overallScore');

  return (
    <div id='similar-projects-container'>
      <span id='title'>
        Similar Projects
      </span>
      <div id='columns'>
        {Object.entries({
          title: 'Title',
          objectiveApproach: 'Objective Approach',
          targetUser: 'Target User',
          thematicFocus: 'Thematic Focus',
          overallScore: 'Overall Score'
        }).map(([id, text]) => (
          <span key={id} onClick={() => setSorting(id)} className={id === sorting ? 'selected' : null}>
            {text}
          </span>
        ))}
      </div>
      {similarProjects[0].similarityAnalysis &&
        <div id='overall-scores'>
          <span>{similarProjects.length} projects</span>
          {['objectiveApproach', 'targetUser', 'thematicFocus', 'overallScore'].map(e => (
            <span key={'overall' + e}>
              {similarProjects.reduce((p, c) => Math.max(p, c.similarityAnalysis[e].similarityScore), 0)}
            </span>
          ))}
        </div>
      }
      <div id='similar-projects'>
        {similarProjects.sort((a, b) => (b.similarityAnalysis && a.similarityAnalysis) ? (sorting === 'title' ? a.project.title.localeCompare(b.project.title) : (b.similarityAnalysis[sorting].similarityScore - a.similarityAnalysis[sorting].similarityScore)) : b.project.id - a.project.id).map(({ project, similarityAnalysis }) => (
          <div className='similar-project' key={'similar' + project.id}>
            <span>{project.title}</span>
            {similarityAnalysis && ['objectiveApproach', 'targetUser', 'thematicFocus', 'overallScore'].map(e => (
              <span key={project.id + e}>
                {similarityAnalysis[e].similarityScore}<span className='over-ten'>/10</span>
              </span>
            ))}
          </div>
        ))}
      </div>
      <style jsx>{scss}</style>
    </div>
  );
};