import * as cheerio from 'cheerio';
const { convert } = require('html-to-text');

const trimWhitespaceAndNewlines = str => (
  str.replace(/^[\s\n]+|[\s\n]+$/g, '')
);

const getDevPostProject = async projectID => {

  const url = `https://devpost.com/software/${projectID}`;

  let content;

  try {
    const response = await fetch(url);
    
    if (response.ok) {
      content = await response.text();
    } else {
      console.error('Failed to fetch', response.status, response.statusText);
    }
    
  } catch (error) {
    console.error(error);
  }

  const $ = cheerio.load(content);

  $.html();

  const title = trimWhitespaceAndNewlines($('#app-title').html());

  const tagline = trimWhitespaceAndNewlines($('#software-header > div:nth-child(1) > div > p').html());

  const descriptionHTML = $('#gallery').next().html();

  const description = convert(descriptionHTML);

  const tags = [];

   $('#built-with > ul').children('li').each((i, e) => {
    tags.push($(e).find('span').text());
  });

  let githubLink;
  const links = [];

  $('.app-links ul').children('li').each((i, e) => {
    const url = $(e).find('a').attr('href');
    try {
      const parsedUrl = new URL(url);
      if (parsedUrl.hostname === 'github.com') {
        githubLink = url;
      } else {
        links.push(url);
      }
    } catch (error) {
      console.log(`Invalid URL: ${url}`);
    }
  });

  const members = [];

  $('#app-team ul').children('.software-team-member').each((i, e) => {
    const image = $(e).find('.user-profile-link img').attr('src') || null;
    const name = $(e).find('.user-profile-link').text() || null;
    members.push({ image, name });
  });

  return {
    title,
    tagline,
    description,
    tags,
    githubLink,
    links,
    members
  };
};

export default getDevPostProject;