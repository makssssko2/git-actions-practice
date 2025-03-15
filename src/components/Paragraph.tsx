import React from 'react';

// Определение типа для пропсов
interface ParagraphProps {
  text: string; // пропс text должен быть строкой
}

// Использование типа для пропсов
const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return <p>{text}</p>;
};

export default Paragraph;
