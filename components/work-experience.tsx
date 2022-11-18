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
} from '@chakra-ui/react'
import {
  SiReact,
  SiTypescript,
  SiWebpack,
  SiJenkins,
  SiSass,
  SiEmberdotjs,
  SiJavascript,
  SiGit,
  SiJira,
  SiAndroid,
  SiJava,
  SiPhp,
  SiHtml5,
  SiSpring,
} from 'react-icons/si'

export const WorkExperience = () => {
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
        <Heading mb="12">💼 Work Experience • 5+ years</Heading>

        <SimpleGrid gap="8" columns={[1, 1, 2, 3]}>
          <Box p="6" borderWidth="1px" borderColor="gray.900">
            <HStack gap="2">
              <Image boxSize="12" alt="Infobip" src="/infobip.png" />
              <Box>
                <Heading size="md">Infobip</Heading>
                <Text>Software Developer</Text>
              </Box>
            </HStack>
            <Text my="6" fontSize="sm" fontWeight="bold" color="blackAlpha.500">
              2020 - PRESENT
            </Text>
            <HStack gap="2">
              <Icon boxSize="8" as={SiReact} />
              <Icon boxSize="8" as={SiTypescript} />
              <Icon boxSize="8" as={SiWebpack} />
              <Icon boxSize="8" as={SiJenkins} />
              <Icon boxSize="8" as={SiSass} />
            </HStack>
          </Box>

          <Box p="6" borderWidth="1px">
            <HStack gap="2">
              <Image boxSize="12" alt="Wirecard" src="/wirecard.jpeg" />
              <Box>
                <Heading size="md">Wirecard</Heading>
                <Text>Software Developer</Text>
              </Box>
            </HStack>
            <Text my="6" fontSize="sm" fontWeight="bold" color="blackAlpha.500">
              2019 - 2020
            </Text>
            <HStack gap="2">
              <Icon boxSize="8" as={SiEmberdotjs} />
              <Icon boxSize="8" as={SiReact} />
              <Icon boxSize="8" as={SiJavascript} />
              <Icon boxSize="8" as={SiGit} />
              <Icon boxSize="8" as={SiJira} />
            </HStack>
          </Box>

          <Box p="6" borderWidth="1px">
            <HStack gap="2">
              <Image boxSize="12" alt="Forbis" src="/forbis.jpeg" />
              <Box>
                <Heading size="md">Forbis</Heading>
                <Text>Software Developer</Text>
              </Box>
            </HStack>
            <Text my="6" fontSize="sm" fontWeight="bold" color="blackAlpha.500">
              2018
            </Text>
            <HStack gap="2">
              <Icon boxSize="8" as={SiAndroid} />
              <Icon boxSize="8" as={SiJava} />
              <Icon boxSize="8" as={SiPhp} />
              <Icon boxSize="8" as={SiHtml5} />
              <Icon boxSize="8" as={SiSpring} />
            </HStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
