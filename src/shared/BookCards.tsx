import { Box, Card, CardBody, CardFooter, Button, Divider, Stack, Heading, Text, Image, Flex } from '@chakra-ui/react';

interface ProductCardProps {
  book: any[];
}

const ProductCard = ({ book }: ProductCardProps) => {
  console.log(book);

  return (
    <Flex
      wrap='wrap'
      justify='center'
      align='center'
      mt='4'
      mx='auto'
      maxW='100%'
      maxH='100%'>
      {book.map((item) => {
        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <Box
              key={item.id}
              width={['100%', '48%', '32%']}
              marginY={['70px', '70px', '100px']}
              maxW='250px'
              maxH='300px'
              margin='30px'>
              <Card>
                <Image
                  src={thumbnail}
                  alt={`Gambar ${item.volumeInfo.title}`}
                  borderRadius='lg'
                  maxW='100%'
                  maxH='150px'
                  bg='pink.100'
                />

                <CardBody>
                  <Stack
                    mt='6'
                    spacing='3'>
                    <Heading
                      size='md'
                      height='60px'>
                      {item.volumeInfo.title}
                    </Heading>
                    <Text
                      color='blue.600'
                      fontSize='xl'>
                      Rp {amount.toFixed()}
                    </Text>
                  </Stack>
                </CardBody>

                <Divider />

                <CardFooter>
                  <Button
                    variant='solid'
                    colorScheme='blue'>
                    Lihat
                  </Button>
                </CardFooter>
              </Card>
            </Box>
          );
        }

        return null;
      })}
    </Flex>
  );
};

export default ProductCard;
