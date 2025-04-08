import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [text, setText] = useState<string>('');

  return (
    <div className="app">
      {/* Блок с фотографией */}
      <div className="photo-container">
        <img 
          src={`${process.env.PUBLIC_URL}/рональдо.jpg`} 
          alt="белембик"
          className="profile-photo"
        />
        <p className="photo-caption">тигр</p>
      </div>

      {/* Блок с перевернутым текстом */}
      <h1>Перевёрнутый текст</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите текст здесь..."
        className="text-input"
      />
      
      <div className="flipped-text-container">
        <h2>Результат:</h2>
        <div className="flipped-text">
          {text}
        </div>
      </div>
    </div>
  );
};

export default App;