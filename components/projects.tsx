import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  HStack,
  Text,
  Icon,
  Divider,
  Link,
  Avatar,
} from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'
import {
  SiNextdotjs,
  SiTypescript,
  SiVercel,
  SiChakraui,
  SiOpenstreetmap,
  SiGraphql,
  SiDigitalocean,
  SiNodedotjs,
} from 'react-icons/si'

export const Projects = () => {
  return (
    <Box py="12" as="section">
      <Container maxW="container.xl">
        <Divider
          opacity="1"
          borderBottomWidth="3px"
          borderColor="gray.900"
          mb="12"
          w="24"
        />
        <Heading mb="12">💸 Projects</Heading>

        <SimpleGrid gap="8" columns={[1, 1, 2, 3]}>
          <Box p="6" borderWidth="1px">
            <HStack gap="2">
              <Image boxSize="12" alt="Nailbar" src="/nailbar.webp" />
              <Box>
                <Heading size="md">Nailbar.sk</Heading>
                <Text>Landing page</Text>
              </Box>
            </HStack>
            <Link
              display="block"
              my="6"
              href="https://nailbar.sk/"
              isExternal
              fontSize="sm"
              fontWeight="bold"
              color="blackAlpha.500"
            >
              OPEN PROJECT <Icon ml="2" as={FiExternalLink} />
            </Link>
            <HStack gap="2">
              <Icon boxSize="8" as={SiNextdotjs} />
              <Icon boxSize="8" as={SiTypescript} />
              <Icon boxSize="8" as={SiVercel} />
              <Icon boxSize="8" as={SiChakraui} />
              <Icon boxSize="8" as={SiOpenstreetmap} />
            </HStack>
          </Box>

          <Box p="6" borderWidth="1px">
            <HStack gap="2">
              <Avatar name="S H" bg="chakra-body-text" />
              <Box>
                <Heading size="md">Servicehub.sk</Heading>
                <Text>Car-repair service</Text>
              </Box>
            </HStack>
            <Link
              display="block"
              my="6"
              href="https://servicehub.sk/"
              isExternal
              fontSize="sm"
              fontWeight="bold"
              color="blackAlpha.500"
            >
              OPEN PROJECT <Icon ml="2" as={FiExternalLink} />
            </Link>
            <HStack gap="2">
              <Icon boxSize="8" as={SiNextdotjs} />
              <Icon boxSize="8" as={SiGraphql} />
              <Icon boxSize="8" as={SiChakraui} />
              <Icon boxSize="8" as={SiNodedotjs} />
              <Icon boxSize="8" as={SiDigitalocean} />
            </HStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
