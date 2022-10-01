import { Box, Flex, HStack, Input, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'gatsby'
import React from 'react'

const Layout = ({children}) => {
  return (
    <Box>
    <Box bg={useColorModeValue('orange.500', 'orange.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Link to='/'>
              <Box color={'white'} fontSize={'xl'} fontWeight={'700'}>Webiny Photo Gallery</Box>
            </Link>
          </HStack>
          <Input htmlSize={20} bg={'white'} width='auto' placeholder='Search for Photos'  />
        </Flex>
    </Box>
     <div>
        {children}
     </div>
    </Box>
  )
}

export default Layout