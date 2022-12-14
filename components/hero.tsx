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
  Text,
  Link,
  useMediaQuery,
} from '@chakra-ui/react'

const LeftSide = () => {
  return (
    <>
      <Heading lineHeight={1.15} size="3xl">
        Hi, I&apos;m{' '}
        <Text color="white" as="span" bg="chakra-body-text" rounded="sm" px="2">
          Yaroslav
        </Text>
        .
        <br />
        A Software Developer
        <br />
        based in <Text as="u">Košice</Text>
      </Heading>
      <Heading
        size="md"
        fontWeight="900"
        textTransform="uppercase"
        color="blackAlpha.400"
        mt="8"
      >
        Development • Agile • Strategy
      </Heading>
      <ButtonGroup size="lg" mt="8" isAttached variant="outline">
        <Button colorScheme="blue" variant="solid" as={Link} href="#contacts">
          Let&apos;s talk
        </Button>
        <Button as={Link} href="#explore">
          Explore
        </Button>
      </ButtonGroup>
    </>
  )
}

const RightSide = () => {
  return (
    <Image
      rounded="full"
      alt="avatar"
      w="100%"
      maxW="520px"
      src="/avatar.jpg"
    />
  )
}

export const Hero = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
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
            {isMobile && <LeftSide />}
            {!isMobile && (
              <SlideFade
                style={{ transitionDuration: '0.5s' }}
                in={true}
                offsetX="-50%"
              >
                <LeftSide />
              </SlideFade>
            )}
          </Box>
          <Flex justify={['center', 'center', 'center', 'flex-end']}>
            {isMobile && <RightSide />}
            {!isMobile && (
              <SlideFade
                style={{ transitionDuration: '0.5s' }}
                in={true}
                offsetX="50%"
              >
                <RightSide />
              </SlideFade>
            )}
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
