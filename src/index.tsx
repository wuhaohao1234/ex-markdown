import React from 'react';
import MarkdownComponent from './MarkdownComponent';
import './index.css'
interface MarkdownMessageBlockProps {
  styles?: React.CSSProperties;
  message: string;
}

const MarkdownMessageBlock: React.FC<MarkdownMessageBlockProps> = ({ styles, message }) => {
  return (
    <div style={styles} className='markdown-body' >
      <MarkdownComponent content={message} />
    </div>
  );
};

export default MarkdownMessageBlock;
