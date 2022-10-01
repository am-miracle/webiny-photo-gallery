import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const Comments = ({name, createdOn, comment, }) => {

  return (
    <Box bg="white" borderRadius="lg" shadow={'md'} p={6} mt={6}>
        <Heading>Comments</Heading>
        <Box p={4}>
            <Flex alignItems={'center'} gap={4} mb={4}>
                <Heading fontSize={'2xl'}>{name}</Heading>
                <Heading fontSize={'md'} fontWeight={'md'}>
                    {new Date(createdOn).toLocaleDateString(undefined, {
                        day:   'numeric',
                        month: 'short',
                        year:  'numeric',
                    })}
                </Heading>
            </Flex>
            <Heading fontSize={'md'} fontWeight={'md'} color={'gray.700'}>{comment}</Heading>
        </Box>
    </Box>
  )
}

export default Comments