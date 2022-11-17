import {
  Image,
  Box,
  Container,
  Flex,
  Heading,
  SlideFade,
  ButtonGroup,
  Button,
  SimpleGrid,
} from '@chakra-ui/react'

const LeftSide = () => {
  return (
    <>
      <Heading size="3xl">
        HI, I&apos;M YAROSLAV.
        <br />
        A CREATIVE DEVELOPER
        <br />
        BASED IN KOSICE
      </Heading>
      <ButtonGroup size="lg" mt="8" isAttached variant="outline">
        <Button colorScheme="blue" variant="solid">
          Let&apos;s talk
        </Button>
        <Button>See projects</Button>
      </ButtonGroup>
    </>
  )
}

export const Hero = () => {
  return (
    <Box as="section" py="8">
      <Container maxW="container.xl">
        <SimpleGrid
          rowGap="12"
          columnGap="4"
          alignItems="center"
          columns={[1, 1, 1, 2]}
        >
          <Box>
            <SlideFade
              style={{ transitionDuration: '0.5s' }}
              in={true}
              offsetX="-50%"
              unmountOnExit={true}
            >
              <LeftSide />
            </SlideFade>
          </Box>
          <Flex justify={['center', 'center', 'center', 'flex-end']}>
            <SlideFade
              style={{ transitionDuration: '0.5s' }}
              in={true}
              offsetX="50%"
              unmountOnExit={true}
            >
              <Image
                rounded="full"
                alt="avatar"
                w="100%"
                maxW="520px"
                src="/avatar.jpg"
              />
            </SlideFade>
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
