import React from 'react'

import { useColorMode } from '@chakra-ui/color-mode'
import { Stack, Text, Flex, Box } from '@chakra-ui/layout'

export default function Empty () {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (

    <Stack id="about"
    paddingTop = {700}
    paddingBottom = {700}
    >
        <Flex margin={100}
              direction = 'column'
              spacing="200px"
              backgroundColor={isDark ? 'gray.700' : 'gray.100'}
              borderRadius="25px"
              justifyContent="flex-start"
              p={5}>
            <Box marginBottom={5}>
                <Text textDecoration="HighlightText" fontWeight="semibold" p={5} backgroundColor={ isDark ? 'whiteAlpha.300' : 'whiteAlpha.700'} borderRadius={10}>
                    <br/>
                    <p><pre>    ...     </pre></p>
                    <br/>
                </Text>
            </Box>
        </Flex>
    </Stack>
  )
}
