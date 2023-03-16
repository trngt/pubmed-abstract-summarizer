import axios from 'axios';
import cheerio from 'cheerio';
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


async function fetchWebsiteContent(pubmedID) {
  try {
    const response = await axios.get(`http://localhost:4000/proxy/${pubmedID}`);
    return response.data;
  } catch (error) {
    console.error(`fetchWebsiteContent, error fetching website content: `, error);
    return null;
  }
}


function extractContent(html) {
  const $ = cheerio.load(html);
  // Just get the relevant article information, title, authors, and abstract

  const authors = $('.inline-authors').text();
  const title = $('.heading-title').text();
  const abstract = $('#abstract').text();

  return "Title: " + title + "Authors: " + authors + " Abstract: " + abstract;
}

async function generateSummary(content) {

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system", 
          "content": "You are a comedian with knowledge of science at an R1 university."},
        {
          "role": "user", 
          "content": "Summarize this abstract in two sentences for an high schooler. " +
          "Return the response as a json string with keys: title, authors, and summary: " + 
          "\n\n" + content
        },
      ],
      temperature: 0.7,
      max_tokens: 256
    });

    console.log(response);

    const summary = response.data.choices[0].message.content;
    return JSON.parse(summary);

  } catch (error) {
    console.error(`Error generating summary`, error);
    return null;
  }
}

export { fetchWebsiteContent, extractContent, generateSummary };
