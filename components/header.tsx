import { Box, Button, Container, Heading, HStack, Link } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Box as="header">
      <Container maxW="container.xl" py="6">
        <HStack align="center" spacing="0">
          <Heading flex="1" size="md">
            Yaroslav Nosenko
          </Heading>
          <HStack
            display={['none', 'none', 'inherit']}
            flex="1"
            justify="center"
            spacing="8"
          >
            <Link>About</Link>
            <Link>Projects</Link>
            <Link>Contacts</Link>
          </HStack>
          <Box textAlign="end" flex="1">
            <Button variant="outline">Let&apos;s talk</Button>
          </Box>
        </HStack>
      </Container>
    </Box>
  )
}
