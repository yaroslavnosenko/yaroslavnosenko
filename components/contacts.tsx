import {
  Box,
  Container,
  Heading,
  Icon,
  Text,
  Wrap,
  WrapItem,
  Link,
  IconButton,
  Tooltip,
  useToast,
} from '@chakra-ui/react'
import { FiCopy } from 'react-icons/fi'
import { SiTelegram, SiInstagram, SiFacebook, SiGithub } from 'react-icons/si'

const EMAIL = 'yaroslav.nosenko.mail@gmail.com'

export const Contacts = () => {
  const toast = useToast()

  const copy = () => {
    navigator.clipboard.writeText(EMAIL)
    toast({
      title: 'Copied to clipboard',
      status: 'success',
      variant: 'some',
    })
  }

  return (
    <Box as="section" py="12" mt="12" bg="blue.100">
      <Container maxW="container.xl">
        <Heading>Let&apos;s talk!</Heading>
        <Text mt="2">
          With this beautiful and responsive React components you will realize
          your next project in no time.
        </Text>
        <Wrap mt="8">
          <WrapItem gap="4">
            <Icon boxSize="8" as={SiTelegram} />
            <Icon boxSize="8" as={SiInstagram} />
            <Icon boxSize="8" as={SiFacebook} />
            <Icon boxSize="8" as={SiGithub} />
          </WrapItem>
        </Wrap>
        <Box mt="8">
          <Link
            fontWeight="500"
            href={'mailto:' + EMAIL + "?subject=Let's talk!"}
          >
            {EMAIL}
          </Link>
          <Tooltip label="Copy email" hasArrow placement="top">
            <IconButton
              aria-label="copy-email"
              icon={<FiCopy />}
              colorScheme="black"
              color="chakra-body-text"
              ml="2"
              onClick={copy}
            />
          </Tooltip>
        </Box>
      </Container>
    </Box>
  )
}
