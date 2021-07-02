/* eslint-disable react/prop-types */
import React from 'react'
import { useColorMode } from '@chakra-ui/color-mode'
import { Box, Text } from '@chakra-ui/layout'
import { IconButton, Image } from '@chakra-ui/react'

export default function ProjectBox (props) {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Box style={props.boxStyle} cursor='pointer' onClick={() => window.open(props.redirect)}>
        <Image src={props.imageUrl} w ='250px'
                h = '250px'
                objectFit = 'cover'/>
        <Text textDecoration = 'HighlightText'
          fontWeight = 'semibold'
          color = {isDark ? 'gray.200' : 'gray.700'}
          textAlign = 'center'
          p = {2}
          backgroundColor = { isDark ? 'whiteAlpha.300' : 'whiteAlpha.700' }>
        {props.name}
        </Text>
        <br/>
        <Text fontWeight = 'light'>{props.description}</Text>
        <br/>
        <Text>
        Desarrollado con...
        </Text>
        { props.languages.map((element, _key) =>
            <IconButton m={3} key={_key} icon={element} />
        )}

    </Box>
  )
}
