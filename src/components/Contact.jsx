import { Box, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import { useColorMode } from '@chakra-ui/color-mode'
import { SimpleGrid, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import ContactBox from './ContactBox'
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa'

export default function Contact () {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  const goProjects = () => {
    const element = document.getElementById('projects')
    element.scrollIntoView({ block: 'center' })
  }

  return (
    <Stack id="contact"
    paddingTop = {500}
    paddingBottom = {500}>

        <Flex
        margin={100}
        direction = 'column'
        spacing="200px"
        backgroundColor={isDark ? 'gray.700' : 'gray.100'}
        borderRadius="25px"
        justifyContent="flex-start"
        p={5}>
            <Box
            p={5}>
                <Text mb={5} fontSize="2xl" textDecoration="HighlightText" fontWeight="semibold" color={isDark ? 'gray.200' : 'gray.700'} textAlign="left">Contactame...</Text>
                <SimpleGrid columns={[1, null, 3]} spacing={8}>
                  <ContactBox name="GitHub" redirect="https://github.com/fstrike7" icon={ <FaGithub/>}/>
                  <ContactBox name="LinkedIn" redirect="https://www.linkedin.com/in/faustino-beatrice/" icon={ <FaLinkedin/>}/>
                  <ContactBox name="Mail" redirect="mailto:cuentadefaustinob@gmail.com" icon={ <FaMailBulk/>}/>
                </SimpleGrid>
            </Box>
        </Flex>
        <Flex justifyContent="space-evenly">
          <Button onClick={goProjects} w='fit-content' p={5} variant={isDark ? 'solid' : 'outline'} colorScheme="blue">Volver</Button>
        </Flex>
    </Stack>
  )
}
