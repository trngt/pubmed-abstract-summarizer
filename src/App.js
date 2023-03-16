import React, { useState } from 'react';
import AbstractForm from './components/AbstractForm';
import AbstractSummary from './components/AbstractSummary';

function App() {
  const [summaryData, setSummaryData] = useState({});

  const handleSummaryData = (data) => {
    setSummaryData(data);
  };

  return (
    <div className="App">
      <h1>PubMed Abstract Summarizer</h1>
      <AbstractForm onSummaryData={handleSummaryData} />
      <AbstractSummary summaryData={summaryData} />
    </div>
  );
}

export default App;
