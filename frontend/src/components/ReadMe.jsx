import React from 'react';

const ReadMeCard = ({ title, description, link }) => {
  return (
    <div 
      style={{
        backgroundColor: '#f0f0f0',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '300px',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '400px',
        width: '300px',
      }}
    >
      <h2 
        style={{
          fontSize: '1.5em',
          marginBottom: '10px',
        }}
      >
        How to use: Select and image and a model and click submit! See the song reccomendation below!
      </h2>
      <p 
        style={{
          fontSize: '1em',
          marginBottom: '15px',
          flex: 1, // Ensures the text doesn't overflow
        }}
      >
        Under the hood: 
        1. Use Hugging Face model to generate image-based tags.
        2. Tags queried to chat models via Groq for songs suggestions.
        3. Song suggestions are displayed below.
        4. This method avoids token limitations when using other options such as Chat GPT.
      </p>
      <a 
        href={link} 
        style={{
          color: '#007bff',
          textDecoration: 'none',
          fontWeight: 'bold',
        }} 
        target="_blank" 
        rel="noopener noreferrer"
      >
      </a>
    </div>
  );
};

export default ReadMeCard;
