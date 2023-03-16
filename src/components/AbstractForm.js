import React, { useState } from 'react';
import { fetchWebsiteContent, extractContent, generateSummary } from '../api/pubmedAPI';

function AbstractForm({ onSummaryData }) {
  const [pubmedID, setPubmedID] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const html = await fetchWebsiteContent(pubmedID);

    if (!html) {
      console.error('Unable to fetch website content.');
      return;
    }

    const content = extractContent(html);
    const summaryResponse = await generateSummary(content);

    if (!summaryResponse) {
      onSummaryData({
        idNumber: pubmedID,
        summary: 'There was an error trying to generate the summary...',
        title: '',
        authors: ''
      });
    } else {
      onSummaryData({
        idNumber: pubmedID,
        summary: summaryResponse.summary,
        title: summaryResponse.title,
        authors: summaryResponse.authors
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="pubmedID">Enter a PubMed ID:</label>
      <input
        type="text"
        name="pubmedID"
        id="pubmedID"
        value={pubmedID}
        onChange={(e) => setPubmedID(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AbstractForm;
