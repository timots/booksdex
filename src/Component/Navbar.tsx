import React from 'react';
import { Box, Flex, IconButton, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, Stack, Avatar, HStack } from '@chakra-ui/react';
import { CloseIcon, AddIcon, HamburgerIcon } from '@chakra-ui/icons';
import logo from '../assets/Logobook.png';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const Links = ['Home', 'Popular', 'Books', 'News'];

const NavLink = (props: Props) => {
  const { children } = props;
  return (
    <Box
      as='a'
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: '#AEDEFC',
      }}
      href={'#'}>
      {children}
    </Box>
  );
};

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bgGradient='linear(to-r, red.200, pink.500)'
        px={4}
        position='fixed'
        top={0}
        zIndex={100}
        width='100vw'>
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={'center'}>
            <Box>
              <img
                src={logo}
                alt='Logo'
                width='200px'
                height='60px'
              />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Link
                to='/Home'
                style={{ textDecoration: 'none' }}>
                <NavLink>Home</NavLink>
              </Link>
              <Link
                to='/Popular'
                style={{ textDecoration: 'none' }}>
                <NavLink>Popular</NavLink>
              </Link>
              <Link
                to='/Books'
                style={{ textDecoration: 'none' }}>
                <NavLink>Books</NavLink>
              </Link>
              <Link
                to='/news'
                style={{ textDecoration: 'none' }}>
                <NavLink>News</NavLink>
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
              Action
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            display={{ md: 'none' }}>
            <Stack
              as={'nav'}
              spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
