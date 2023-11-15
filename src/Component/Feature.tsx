import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack } from '@chakra-ui/react';
import { FcAssistant, FcReadingEbook, FcLibrary } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack
      bgGradient="linear(to-r, red.200, pink.500)"
      borderRadius="20px"
      p={4}
      spacing={2}
      textAlign="center"
      align="center"
    >
      <Box>{icon}</Box>
      <Text fontWeight={600}>{title}</Text>
      <Text color="white">{text}</Text>
    </Stack>
  );
};

const SimpleThreeColumns: React.FC = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Lifetime Support'}
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium molestiae similique'}
        />
        <Feature
          icon={<Icon as={FcReadingEbook} w={10} h={10} />}
          title={'Unlimited Donations'}
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium molestiae similique'}
        />
        <Feature
          icon={<Icon as={FcLibrary} w={10} h={10} />}
          title={'Instant Delivery'}
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium molestiae similique'}
        />
      </SimpleGrid>
    </Box>
  );
};

export default SimpleThreeColumns;
