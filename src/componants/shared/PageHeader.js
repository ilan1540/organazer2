import React from 'react';

export const PageHeader = ({ word1, word2 }) => {
  return (
    <div>
      <h1 className="text-center">
        {word1} <span className="text-primary">{word2}</span>
      </h1>
    </div>
  );
};
