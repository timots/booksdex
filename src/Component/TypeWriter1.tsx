import React from 'react';
import { useTypewriter, Cursor, TypewriterHelper } from 'react-simple-typewriter';
import { Center, Box } from '@chakra-ui/react';
import './Typing.css'; // Import file CSS untuk styling

const Typing: React.FC = () => {
  const [text] = useTypewriter({
    words: ['learn yourself', 'develop yourself', 'also explore your world'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  }) as [string, TypewriterHelper];

  return (
    <Center>
      <Box
        className='typing-box'
        p='20px'
        bg='gray-200'
        borderRadius='md'
        width='98.9vw'
        color='whitesmoke'
        height='150px'
        textAlign='center'>
        <h1 style={{ margin: '60px', color: 'whitesmoke' }}>
          From your book, you can {''}
          <span style={{ fontWeight: 'bold', color: 'pink' }}>{text}</span>
          <span style={{ color: 'whitesmoke' }}>
            <Cursor cursorStyle='|' />
          </span>
        </h1>
      </Box>
    </Center>
  );
};

export default Typing;
