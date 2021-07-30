import React from 'react'
import { Stack, Text, Flex, Box } from '@chakra-ui/layout'

import { useColorMode } from '@chakra-ui/color-mode'
import { Button } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/button'

import { useMediaQuery } from '@chakra-ui/media-query'
import { FaPython, FaJsSquare, FaReact, FaGitSquare, FaDatabase, FaHtml5 } from 'react-icons/fa'

export default function About (props) {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [minWidth] = useMediaQuery('(min-width: 800px) and (orientation:landscape)')
  const goTop = () => {
    document.documentElement.scrollTop = 0
  }
  const goProjects = () => {
    const element = document.getElementById('projects')
    element.scrollIntoView({ block: 'center' })
  }

  const clickProjects = () => {
    // eslint-disable-next-line react/prop-types
    Promise.resolve(props.setShowProjects(true)).then(goProjects)
  }

  const showNameBox = (e) => {
    console.log(e.target.id)
    return (
      <Stack position="relative" top="40px">
        <Box margin={minWidth ? 100 : 0}
              spacing="200px"
              backgroundColor={isDark ? 'gray.700' : 'gray.100'}
              borderRadius="25px"
              p={5}>
          <p>{e.target.id}</p>
        </Box>
      </Stack>
    )
  }

  return (
    <Stack id="about"
    paddingTop = {500}
    paddingBottom = {500}
    >
        <Flex margin={minWidth ? 100 : 0}
              direction = 'column'
              spacing="200px"
              backgroundColor={isDark ? 'gray.700' : 'gray.100'}
              borderRadius="25px"
              justifyContent="flex-start"
              p={5}>
            <Box marginBottom={5}>
                <Text fontSize="2xl" textDecoration="HighlightText" fontWeight="semibold" color={isDark ? 'gray.200' : 'gray.700'} textAlign="center">Acerca de mí </Text>
                <br/>
                <Text textDecoration="HighlightText" fontWeight="semibold" color={isDark ? 'gray.200' : 'gray.700'} textAlign="center" p={5} backgroundColor={ isDark ? 'whiteAlpha.300' : 'whiteAlpha.700'} borderRadius={10}>
                    Tengo 19 años, soy estudiante de programación y me especializo en el area de desarrollo Web, principalmente Frontend. <br/>
                    Cuento con 2 años de experiencia programando y publicando proyectos personales en mi cuenta de <a href="https://github.com/fstrike7">GitHub</a>.
                    <br/> Aspiro a desarrollarme como Full Stack Web Developer.
                </Text>
            </Box>
            <Box alignSelf="center">
                <Text marginBottom={1} fontSize="2xl" textDecoration="HighlightText" fontWeight="semibold" color={isDark ? 'gray.200' : 'gray.700'} textAlign="center">Habilidades</Text>
                <Box>
                  <IconButton w="50px" h="50px" onClick={showNameBox} id="btnHtml5" ml={2} icon={ <FaHtml5/> } isRound="true"></IconButton>
                  <IconButton w="50px" h="50px" onClick={showNameBox} id="btnPython" ml={2} icon={ <FaPython/> } isRound="true"></IconButton>
                  <IconButton w="50px" h="50px" onClick={showNameBox} id="btnJavascript" ml={2} icon={ <FaJsSquare/> } isRound="true"></IconButton>
                  <IconButton w="50px" h="50px" onClick={showNameBox} id="btnReact" ml={2} icon={ <FaReact/> } isRound="true"></IconButton>
                  <IconButton w="50px" h="50px" onClick={showNameBox} id="btnGit" ml={2} icon={ <FaGitSquare/> } isRound="true"></IconButton>
                  <IconButton w="50px" h="50px" onClick={showNameBox} id="btnSQL" ml={2} icon={ <FaDatabase/> } isRound="true"></IconButton>
                </Box>
            </Box>
        </Flex>
        <Flex justifyContent="space-evenly">
          <Button onClick={goTop} w='fit-content' p={5} variant={isDark ? 'solid' : 'outline'} colorScheme="blue">Volver</Button>
          <Button onClick={clickProjects} w='fit-content' p={5} variant={isDark ? 'solid' : 'outline'} colorScheme="blue">Continuar</Button>
        </Flex>
    </Stack>
  )
}
