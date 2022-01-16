import React from 'react'
import { Stack, SimpleGrid, Flex, Text } from '@chakra-ui/layout'

import { useColorMode } from '@chakra-ui/color-mode'
import { Button } from '@chakra-ui/react'
// import { IconButton } from '@chakra-ui/button'

import recursosWebPreview from '../assets/img/recursos-web.jpg'
import worldOfZuulPreview from '../assets/img/world-of-zuul.png'
import discordpyAndTweepyPreview from '../assets/img/discordpy-tweepy.jpg'
import toDoListPreview from '../assets/img/todolist.jpg'
import ProjectBox from './ProjectBox'

// import { useMediaQuery } from '@chakra-ui/media-query'
import { FaPython, FaJsSquare, FaHtml5, FaDatabase, FaReact, FaCss3 } from 'react-icons/fa'

export default function Projects (props) {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  //   const [minWidth] = useMediaQuery('(min-width: 800px) and (orientation:landscape)')
  const goAbout = () => {
    const element = document.getElementById('about')
    element.scrollIntoView({ block: 'center' })
  }

  const boxStyle = {
    backgroundColor: 'gray.700',
    textAlign: 'center',
    margin: '15% 0',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.4)',
    borderRadius: '10px',
    transition: '.2s',
    _hover: { boxShadow: '0 8px 16px 0 rgba(0,0,0,0.8)' }
  }

  const goContact = () => {
    const element = document.getElementById('contact')
    element.scrollIntoView({ block: 'center' })
  }

  const clickContact = () => {
    // eslint-disable-next-line react/prop-types
    Promise.resolve(props.setShowContacts(true)).then(goContact)
  }

  return (
    <Stack id="projects"
    paddingTop = {500}
    paddingBottom = {500}
    >
        <Text marginLeft="25px" fontSize="5xl">Proyectos</Text>
        <SimpleGrid minChildWidth='280px' spacing={10}>
            <ProjectBox redirect={'https://recursosweb.herokuapp.com/'} boxStyle={boxStyle} name="Recursos Web" imageUrl={recursosWebPreview} description="Proyecto de plataforma Web tipo 'red social' para subir material de estudio o relacionado a la carrera. Utilizando el framework Django y SQLite3 para Backend." languages={[<FaPython key="pythonIcon"/>, <FaJsSquare key="jsIcon"/>, <FaHtml5 key="html5Icon"/>, <FaDatabase key='databaseIcon'/>]}/>
            <ProjectBox redirect={'https://github.com/fstrike7/World-Of-Zuul-Python'} boxStyle={boxStyle} name="World Of Zuul en Python" imageUrl={worldOfZuulPreview} description="Juego por consola diseñado para el entendimiento y aplicación de la programación orientada a objetos, escrito en su totalidad en Python." languages={[<FaPython key='pythonIcon'/>]}/>
            <ProjectBox redirect={'https://github.com/fstrike7/discordpy_basics'} boxStyle={boxStyle} name="Discordpy | Tweepy Basics" imageUrl={discordpyAndTweepyPreview} description="Repositorios diseñados para guiar en la creación de bots para Twitter y Discord, ambos comentados en inglés y escritos en Python." languages={[<FaPython key='pythonIcon'/>, <FaDatabase key='databaseIcon'/>]}/>
            <ProjectBox redirect={'https://todolist-react-five.vercel.app/'} boxStyle={boxStyle} name="To Do List en React" imageUrl={toDoListPreview} description="To Do List sobre el framework React.js implementando uso de Router y LocalStorage para guardar la sesión, además de Flexbox CSS para el diseño responsive." languages={[<FaJsSquare key='jsIcon'/>, <FaReact key='reactIcon'/>, <FaCss3 key='css3Icon'/>]}/>

        </SimpleGrid>
        <Flex justifyContent="space-evenly">
          <Button onClick={goAbout} w='fit-content' p={5} variant={isDark ? 'solid' : 'outline'} colorScheme="blue">Volver</Button>
          <Button onClick={clickContact} w='fit-content' p={5} variant={isDark ? 'solid' : 'outline'} colorScheme="blue">Continuar</Button>
        </Flex>
    </Stack>
  )
}
