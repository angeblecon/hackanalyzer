const searchProjects = async query => {

  const MAX_PROJECTS = 50;
  const projects = [];
  let running = true;

  for (let page = 1; running && projects.length <= MAX_PROJECTS && page < 10; page++) {
    const url = new URL('https://devpost.com/software/search');
    url.searchParams.append('query', query);
    url.searchParams.append('page', page);

    let content;

    try {
      const response = await fetch(url);
      
      if (response.ok) {
        content = await response.json();
      } else {
        console.error('Failed to fetch', response.status, response.statusText);
      }
      
    } catch (error) {
      console.error(error);
    }

    console.log(content);

    if (!content.software?.length) {
      running = false;
    } else {
      projects.push(...content.software.map(s => ({
        id: s.slug,
        title: s.name,
        tagline: s.tagline,
        members: s.members,
        tags: s.tags
      })));
    }
  }

  return projects;
};

export default searchProjects;