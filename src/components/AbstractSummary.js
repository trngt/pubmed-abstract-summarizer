import React from 'react';

function AbstractSummary({ summaryData }) {
  const { idNumber, summary, title, authors } = summaryData;

  return (
    <>
      {summary && (
        <>
          <h2>{title}</h2>
          <p>{authors}</p>
          <h3>Summary of abstract:</h3>
          <p>{summary}</p>
        </>
      )}
    </>
  );
}

export default AbstractSummary;
