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

  const tagLine = trimWhitespaceAndNewlines($('#software-header > div:nth-child(1) > div > p').html());

  const descriptionHTML = $('#gallery').next().html();

  const description = convert(descriptionHTML);

  const tags = [];

   $('#built-with > ul').children('li').each((i, e) => {
    tags.push($(e).find('span').text());
  });
  
  const links = [];

  $('.app-links ul').children('li').each((i, e) => {
    links.push($(e).find('a').attr('href'));
  });

  const members = [];

  $('#app-team ul').children('.software-team-member').each((i, e) => {
    const image = $(e).find('.user-profile-link img').attr('src') || null;
    const name = $(e).find('.user-profile-link').text() || null;
    members.push({ image, name });
  });

  return {
    title,
    tagLine,
    description,
    tags,
    links,
    members
  };
};

export default getDevPostProject;