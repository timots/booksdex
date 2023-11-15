import { useState } from 'react';
import axios from 'axios';
import { Box, Button, Input, InputGroup, InputLeftElement, InputRightAddon } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import ProductCard from '../shared/BookCards';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = () => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyDFDm5Dg7-mDoeIFKq4KYwBS_vYQ_btvEA`)
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className='searching'>
        <div className='row1'>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            marginTop='100px'>
            <InputGroup
              borderRadius={5}
              width={{ base: '90%', md: '70%', lg: '50%' }}
              bg='pink'
              zIndex={10}>
              <InputLeftElement
                pointerEvents='none'
                children={<Search2Icon color='gray.600' />}
              />
              <Input
                color='teal'
                placeholder='Search for books...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                _placeholder={{ color: 'inherit' }}
              />
              <InputRightAddon
                p={0}
                border='none'>
                <Button
                  size='sm'
                  borderLeftRadius={0}
                  borderRightRadius={3.3}
                  border='1px solid #949494'
                  onClick={handleSearch}>
                  Search
                </Button>
              </InputRightAddon>
            </InputGroup>
          </Box>
        </div>
      </div>
      <div className='container'>
        <ProductCard book={books} />
      </div>
    </>
  );
};

export default SearchBar;
