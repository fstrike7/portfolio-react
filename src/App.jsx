import React, { useState, Suspense } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { IconButton } from '@chakra-ui/button'
import { Flex, VStack, Spacer, Stack } from '@chakra-ui/layout'
import { useColorMode } from '@chakra-ui/color-mode'

// import { Image } from '@chakra-ui/react'

import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa'
import Empty from './components/Empty'
import Header from './components/Header'
import Contact from './components/Contact'

const About = React.lazy(() => import('./components/About.jsx'))

const Projects = React.lazy(() => import('./components/Projects'))

function App () {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  const [showAbout, setShowAbout] = useState(false)
  const [showProjects, setShowProjects] = useState(false)
  const [showContact, setShowContacts] = useState(false)

  React.Component.componentDidMount = () => {
    document.documentElement.scrollTop = 0
  }

  return (
  <Router>
    <Switch>
      <Route path="/">
        <VStack p={5}>
          <Flex w="100%">
            {/* <Heading ml="2" size="md" fontWeight="semibold" color="cyan.300">Wesa calabresa</Heading> */}
            <Spacer/>
            <IconButton onClick={() => window.open('https://github.com/fstrike7')} ml={2} icon={ <FaGithub/> } isRound="true"></IconButton>
            <IconButton onClick={() => window.open('https://www.linkedin.com/in/faustino-beatrice/')} ml={2} icon={ <FaLinkedin/> } isRound="true"></IconButton>
            <IconButton ml={8} icon={ isDark ? <FaSun/> : <FaMoon/>} onClick={toggleColorMode} isRound="true"></IconButton>
          </Flex>
          <Header setShowAbout={setShowAbout.bind(this)}/>
          {
            showAbout && <Suspense fallback={<Stack id="about"><Empty/></Stack>}><About setShowProjects={setShowProjects.bind(this)}/></Suspense>
          }
          {
            showProjects && <Suspense fallback={<Stack id="projects"><Empty/></Stack>}><Projects setShowContacts={setShowContacts.bind(this)}/></Suspense>
          }
          {
            showContact && <Suspense fallback={<Stack id="contact"><Empty/></Stack>}><Contact/></Suspense>
          }
        </VStack>
      </Route>
    </Switch>
  </Router>
  )
}

export default App
