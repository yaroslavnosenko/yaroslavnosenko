import { Box, Container, Heading, Text } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Box py="12" bg="yellow.200" id="contacts">
      <Container maxW="container.xl">
        <Heading flex="1" size="md" mb="2">
          Yaroslav Nosenko
        </Heading>
        <Text>Made with 🇺🇦 in ❤️</Text>
      </Container>
    </Box>
  )
}
