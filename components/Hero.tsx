import { Box, Flex, Image, Stack, Text, Heading, Button } from "@chakra-ui/react"

export default function Header() {
    return (
      <Box as="header" w="full" bg="white" overflow="hidden">
        <Flex direction={{ base: 'column', lg: 'row' }} minH={{ base: 'auto', lg: '100vh' }}>
          <Box 
            w={{ base: '100%', lg: '50%' }} 
            h={{ base: '400px', lg: 'auto' }}
            position="relative"
            order={{ base: 1, lg: 2 }}
          >
            <Button 
              bg="#E23744"
              color="white"
              w={{ base: '100px', lg:'140px' }}
              h={{ base: '30px', lg: '40px' }}
              position="absolute"
              top={{ base: '20px', lg: '30px' }}
              right={{ base: '20px', lg: '30px' }}
              borderColor={'white'}
              borderWidth="1px"
              borderRadius="30px"
              fontSize={{ base: '12px', lg: '14px' }}
              zIndex={30}
              _hover={{ bg: "red.600" }}
            >
              Get In Touch
            </Button>
            <Image 
              src="/main.png" 
              alt="Pizza" 
              position="absolute"
              top="0"
              right="0"
              w="100%"
              h="100%"
              objectFit="cover"
            />
            <Image 
              src="/vector.png" 
              alt="Vector Overlay" 
              position="absolute" 
              top="0" 
              right="0" 
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>

          <Box w={{ base: '100%', lg: '50%' }} p={{ base: 6, lg: 12 }} position="relative" order={{ base: 2, lg: 1 }}>       
            <Stack spacing={6} maxW={{ base: "100%", lg: "400px" }} mt={{ base: 8, lg: 20 }} alignItems={{ base: 'center', lg: 'flex-start' }}>
              <Image
                src="/truck.png"
                alt="Food Truck"
                position={{ base: 'static', lg: 'absolute' }}
                top="33px"
                left="24px"
                w={{ base: '80px', lg: '100px' }}
                h="auto"
                mb={{ base: 4, lg: 0 }}
              />
              <Stack spacing={6} textAlign={{ base: 'center', lg: 'left' }} w="100%">
                <Heading as="h1" fontSize={{ base: "32px", lg: "48px" }} color="#0E2368" lineHeight={{ base: "40px", lg: "60px" }}>
                  Discover the <Text as="span" color="#E23744">Best Food</Text> and Drinks
                </Heading>
                <Text color="#444957" fontSize={{ base: "14px", lg: "16px" }} lineHeight={{ base: "20px", lg: "24px" }}>
                  Naturally made Healthcare Products for the better care & support of your body.
                </Text>
                <Button 
                  bg="#E23744" 
                  color="white" 
                  size="lg" 
                  borderRadius="full" 
                  alignSelf={{ base: 'center', lg: 'flex-start' }}
                  px={8}
                  _hover={{ bg: "red.600" }}
                >
                  Explore Now!
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Flex>
      </Box>
    )
  }