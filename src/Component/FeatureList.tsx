import React from 'react';
import { Flex, Box, SimpleGrid, GridItem, Stack, chakra, Icon } from '@chakra-ui/react';

interface FeatureProps {
  title: string;
  children: React.ReactNode;
}

const Feature: React.FC<FeatureProps> = ({ title, children }) => {
  return (
    <Flex>
      <Flex shrink={0}>
        <Icon
          boxSize={5}
          mt={1}
          mr={1}
          color='white'
          _dark={{
            color: 'brand.300',
          }}
          viewBox='0 0 20 20'
          fill='currentColor'>
          <path
            fillRule='evenodd'
            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
            clipRule='evenodd'></path>
        </Icon>
      </Flex>
      <Box ml={4}>
        <chakra.dt
          fontSize='lg'
          fontWeight='bold'
          lineHeight='6'
          _light={{
            color: 'white',
          }}>
          {title}
        </chakra.dt>
        <chakra.dd
          mt={2}
          color='white'
          _dark={{
            color: 'gray.400',
          }}>
          {children}
        </chakra.dd>
      </Box>
    </Flex>
  );
};

const FeatureList: React.FC = () => {
  return (
    <Flex
      bg={'transparent'}
      _dark={{
        bg: '#3AEDEFC',
      }}
      p={20}
      w='auto'
      justifyContent='center'
      alignItems='center'>
      <Box
        shadow='xl'
        bg='pink.400'
        _dark={{
          bg: 'gray.800',
        }}
        px={8}
        py={20}
        mx='auto'>
        <SimpleGrid
          columns={{
            base: 1,
            lg: 3,
          }}
          spacingY={{
            base: 10,
            lg: 32,
          }}
          spacingX={{
            base: 10,
            lg: 24,
          }}>
          <Box alignSelf='start'>
            <chakra.h2
              _light={{
                color: 'brand.500',
              }}
              fontWeight='semibold'
              textTransform='uppercase'
              letterSpacing='wide'>
              Everything you need
            </chakra.h2>
            <chakra.h2
              mb={3}
              fontSize={{
                base: '3xl',
                md: '4xl',
              }}
              fontWeight='extrabold'
              textAlign={{
                base: 'center',
                sm: 'left',
              }}
              _light={{
                color: 'black',
              }}
              lineHeight='shorter'
              letterSpacing='tight'>
              All-In-One Platform
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{
                base: 'lg',
                md: 'xl',
              }}
              textAlign={{
                base: 'center',
                sm: 'left',
              }}
              color='gray.600'
              _dark={{
                color: 'gray.500',
              }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </chakra.p>
          </Box>
          <GridItem colSpan={2}>
            <Stack
              bgGradient='linear(to-r, red.200, pink.500)'
              borderRadius='10px'
              spacing={{
                base: 10,
                md: 0,
              }}
              display={{
                md: 'grid',
              }}
              gridTemplateColumns={{
                md: 'repeat(2,1fr)',
              }}
              gridColumnGap={{
                md: 8,
              }}
              gridRowGap={{
                md: 10,
              }}>
              <Feature title='Read Your Book Easyly'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, cupiditate!</Feature>
              <Feature title='Use our Libary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam natus cupiditate necessitatibus?</Feature>
              <Feature title='Own your Book store experience'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates dolorem ea vitae quae hic.</Feature>
              <Feature title='Publish your Own Book'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium molestiae similique.</Feature>
              <Feature title='Clear overview for efficient tracking'>Handle your subscriptions and transactions efficiently with the clear overview in Dashboard.</Feature>
              <Feature title='Decide how you integrate Payments'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores animi quaerat perspiciatis nisi nihil incidunt?</Feature>
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default FeatureList;
