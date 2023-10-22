import scss from './Header.scss';

export default function Header({ project }) {

  if (!project) return <span>Loading...</span>;
  
  return (
    <div id='header-container'>
      <h1>{project.title}</h1>
      <div id='header'>
        <div id='left'>
          <div id='picture-with-members'>
            {project.members.length > 0 &&
              <div id='members'>
                {project.members.map((m, i) => (
                  <div className='member' key={'member' + i}>
                    <img src={m.image} />
                    <span>{m.name || 'Unknown member'}</span>
                  </div>
                ))}
              </div>
            }
            {project.images.length &&
              <img src={project.images[0]} id='project-img' />
            }
          </div>
          {project.structuredDescription.shortDescription &&
            <span id='short-description'>
              {project.structuredDescription.shortDescription}
            </span>
          }
          {project.structuredDescription &&
            <div id='description'>
              {Object.entries({
                objectiveApproach: 'Objective Approach',
                targetUser: 'Target User',
                thematicFocus: 'Thematic Focus'
              }).map(([id, text]) => (
                <span key={id}>
                  <b>{text}</b>
                  {project.structuredDescription[id]}
                </span>
              ))}
            </div>
          }
        </div>
      </div>
      <style jsx>{scss}</style>
    </div>
  )
};