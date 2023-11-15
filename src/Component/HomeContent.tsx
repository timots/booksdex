import { useState } from 'react';
import { Box, Flex, Image, Text, TextProps } from '@chakra-ui/react';

const HomeContent = () => {
  const arrowStyles: TextProps = {
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    // width: 'auto',
    marginTop: '-22px',
    padding: '16px',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '18px',
    transition: '0.6s ease',
    borderRadius: '0 10px 10px 0',
    userSelect: 'none',
    _hover: {
      opacity: 0.8,
      bg: 'black',
    },
  };
  const slides = [
    {
      img: 'https://www.porchlightbooks.com/contentassets/fb5427a245484d7b8e9ec1dfedeba065/july-19-newreleases-web.png?w=1200&mode=max',
    },
    {
      img: 'https://i.pinimg.com/originals/c6/8c/a5/c68ca5856a957b894ef38363454e2187.jpg',
    },
    {
      img: 'https://memoribuku.com/wp-content/uploads/2021/03/2021-02-16-095004390-scaled.jpg',
    },
    {
      img: 'https://i.ebayimg.com/images/g/RbwAAOSwrmdkfecn/s-l1200.webp',
    },
    {
      img: 'https://reapp.com.gh/wp-content/uploads/2021/07/121387257_10159056734734060_6797574228781088611_o.jpg',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const carouselStyle = {
    transition: 'all .5s',
    marginLeft: `-${currentSlide * 100}%`,
  };

  const responsiveImageStyle = {
    maxHeight: 'auto',
    width: '1500px',
  };

  return (
    <Flex
      w='full'
      bg={'transparent'}
      _dark={{
        bg: '#3e3e3e',
      }}
      p={10}
      alignItems='center'
      justifyContent='center'>
      <Flex
        w='full'
        overflow='hidden'
        position='relative'>
        <Flex
          h='400px'
          w='full'
          {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box
              key={`slide-${sid}`}
              boxSize='full'
              shadow='md'
              flex='none'>
              <Text
                color='black'
                fontSize='xs'
                p='8px 12px'
                position='absolute'
                top='0'>
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                alt='carousel image'
                boxSize='full'
                backgroundSize='cover'
                style={responsiveImageStyle}
              />
            </Box>
          ))}
        </Flex>
        <Text
          {...arrowStyles}
          left='0'
          onClick={prevSlide}>
          &#10094;
        </Text>
        <Text
          {...arrowStyles}
          right='0'
          onClick={nextSlide}>
          &#10095;
        </Text>
      </Flex>
    </Flex>
  );
};

export default HomeContent;
