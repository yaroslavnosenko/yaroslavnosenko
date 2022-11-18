import {
  Box,
  Container,
  Heading,
  Text,
  useToast,
  SimpleGrid,
  Wrap,
  WrapItem,
  Icon,
  Link,
  Tooltip,
  IconButton,
} from '@chakra-ui/react'
import { FiCopy } from 'react-icons/fi'
import {
  SiFacebook,
  SiInstagram,
  SiTelegram,
  SiGithub,
  SiLinkedin,
} from 'react-icons/si'

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
    <Box as="section" py="16" mt="12" bg="blue.100">
      <Container maxW="container.xl">
        <SimpleGrid gap="8" columns={[1, 1, 2]} alignItems="center">
          <Box>
            <Heading>Let&apos;s talk!</Heading>
            <Text mt="2">
              Whether you&apos;re curious about job, projects, or cooperation —
              I&apos;m ready to answer any and all questions.
            </Text>
          </Box>
          <Box textAlign={[null, null, 'end']}>
            <Box mb="4" mr="-2">
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
                  onClick={copy}
                />
              </Tooltip>
            </Box>
            <Wrap justify={[null, null, 'flex-end']}>
              <WrapItem gap="4">
                <Icon boxSize="8" as={SiTelegram} />
                <Icon boxSize="8" as={SiInstagram} />
                <Icon boxSize="8" as={SiFacebook} />
                <Icon boxSize="8" as={SiGithub} />
                <Icon boxSize="8" as={SiLinkedin} />
              </WrapItem>
            </Wrap>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
