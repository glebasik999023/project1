import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [text, setText] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="app">
      <h1>Перевёрнутый текст</h1>
      
      <div className="input-section">
        <h2>Введите текст:</h2>
        <textarea
          value={text}
          onChange={handleInputChange}
          placeholder="Начните печатать..."
        />
      </div>

      <div className="output-section">
        <h2>Результат:</h2>
        <div className="flipped-text">
          {text}
        </div>
      </div>
    </div>
  );
};

export default App;