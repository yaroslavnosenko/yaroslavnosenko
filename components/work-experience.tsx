import {
  Box,
  Container,
  Heading,
  Stack,
  Image,
  SimpleGrid,
  HStack,
  Text,
  StackDivider,
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
          borderBottomWidth="4px"
          borderColor="gray.900"
          mb="12"
          w="24"
        />
        <Heading mb="16">Work Experience • 5+ years</Heading>
        <Stack gap="6" divider={<StackDivider />}>
          <Box>
            <SimpleGrid alignItems="center" columns={[1, 1, 1, 3]}>
              <HStack gap="4">
                <Image boxSize="16" alt="Infobip" src="/infobip.png" />
                <Box>
                  <Heading size="md">Infobip</Heading>
                  <Text>Software Developer</Text>
                </Box>
              </HStack>
              <Text fontWeight="bold" color="blackAlpha.500">
                2020 - PRESENT
              </Text>
              <HStack gap="2" justify="flex-end">
                <Icon boxSize="10" as={SiReact} />
                <Icon boxSize="10" as={SiTypescript} />
                <Icon boxSize="10" as={SiWebpack} />
                <Icon boxSize="10" as={SiJenkins} />
                <Icon boxSize="10" as={SiSass} />
              </HStack>
            </SimpleGrid>
          </Box>

          <Box>
            <SimpleGrid alignItems="center" columns={[1, 1, 2, 3]}>
              <HStack gap="4">
                <Image boxSize="16" alt="Wirecard" src="/wirecard.png" />
                <Box>
                  <Heading size="md">Wirecard</Heading>
                  <Text>Software Developer</Text>
                </Box>
              </HStack>
              <Text fontWeight="bold" color="blackAlpha.500">
                2019 - 2020
              </Text>
              <HStack gap="2" justify="flex-end">
                <Icon boxSize="10" as={SiEmberdotjs} />
                <Icon boxSize="10" as={SiReact} />
                <Icon boxSize="10" as={SiJavascript} />
                <Icon boxSize="10" as={SiGit} />
                <Icon boxSize="10" as={SiJira} />
              </HStack>
            </SimpleGrid>
          </Box>

          <Box>
            <SimpleGrid
              justifyContent="center"
              rowGap="4"
              alignItems="center"
              columns={[2, 2, 2, 3]}
            >
              <HStack gap="4">
                <Image boxSize="16" alt="Forbis" src="/forbis.jpeg" />
                <Box>
                  <Heading size="md">Forbis</Heading>
                  <Text>Software Developer</Text>
                </Box>
              </HStack>
              <Text textAlign="center" fontWeight="bold" color="blackAlpha.500">
                2018
              </Text>
              <HStack justify="flex-end" gap="2">
                <Icon boxSize="10" as={SiAndroid} />
                <Icon boxSize="10" as={SiJava} />
                <Icon boxSize="10" as={SiPhp} />
                <Icon boxSize="10" as={SiHtml5} />
                <Icon boxSize="10" as={SiSpring} />
              </HStack>
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
