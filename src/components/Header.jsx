import React from 'react'

import { Stack, Flex, Box, Text } from '@chakra-ui/layout'
import { useColorMode } from '@chakra-ui/color-mode'
import { Image, Button } from '@chakra-ui/react'

import { useMediaQuery } from '@chakra-ui/media-query'
import me from '../assets/img/me.png'

function Header (props) {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [minWidth] = useMediaQuery('(min-width: 800px) and (orientation:landscape)')

  const goAbout = () => {
    const element = document.getElementById('about')
    element.scrollIntoView({ block: 'center' })
  }

  const clickAbout = () => {
    // eslint-disable-next-line react/prop-types
    Promise.resolve(props.setShowAbout(true)).then(goAbout)
  }

  return (
      <Stack id="top"
      paddingBottom = {500}>
        <Flex
              // padding={5}
              margin={minWidth ? 150 : 5}
              direction = {minWidth ? 'row-reverse' : 'column'}
              spacing="200px"
              backgroundColor={isDark ? 'gray.700' : 'gray.100'}
              borderRadius="25px"
              justifyContent="flex-start"
              marginBottom={0}
              p={minWidth ? 15 : 5}
              >
            <Box flexBasis={ minWidth ? '40%' : '100%' } alignSelf="center">
              <Image src={me} w={minWidth ? '25%' : '20%'} margin="auto"></Image>
              <Text fontSize="2xl " fontWeight="semibold" textAlign="center">Faustino Beatrice <br/> Web Developer</Text>
            </Box>
            <Box flexBasis={ minWidth ? '60%' : '100%' } margin="auto" marginTop={minWidth ? 'auto' : '5%'}>
              <Text fontSize="2xl" fontWeight="semibold" textAlign="center">
                Hola! 👋
              </Text>
              <Text fontSize="3l" fontWeight="semibold" textAlign="center">
                <p>Bienvenido a mi portafolio, donde podés encontrar todos mis proyectos actuales, habilidades y más.</p>
              </Text>

            </Box>

        </Flex>
        <Flex justifyContent="center">
          <Button onClick={clickAbout} w='fit-content' p={5} variant={isDark ? 'solid' : 'outline'} colorScheme="blue">Vamos</Button>
        </Flex>
      </Stack>
  )
}

export default Header
