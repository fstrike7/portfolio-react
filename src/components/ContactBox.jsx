/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Box, Text } from '@chakra-ui/layout'
import { useColorMode } from '@chakra-ui/color-mode'
import { IconButton } from '@chakra-ui/button'

function ContactBox (props) {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [showName, setShowName] = useState(false)

  return (
        <div>
            <Box w="50" h="auto" display="flex" flexFlow="column nowrap" alignItems="center" justifyContent="space-between">
                <IconButton onMouseOverCapture={setShowName} onClick={() => window.open(props.redirect)} w="50px" h="50px" icon={props.icon}/>
            </Box>
            {showName && <Text textDecoration = 'HighlightText'
            fontWeight = 'semibold'
            color = {isDark ? 'gray.200' : 'gray.700'}
            textAlign = 'center'
            p = {2}
            opacity={0.6}>{props.name}
            </Text>}
        </div>
  )
}

export default ContactBox
