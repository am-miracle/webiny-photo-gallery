import { Box, Container, Heading, Image, Stack } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

const SinglePhoto = ({data}) => {
  const photo = data.webiny.listPhotos.data[0];
  console.log(photo)
  return (
    <Layout>
      <Container maxW='900px'>
        <Stack py={6}>
          <Image src={photo.image} alt={`${photo.name} photo`} />
          <Heading>{photo.name}</Heading>
          {/* <Box as={'p'}>{photo.description}</Box> */}
        </Stack>
      </Container>
    </Layout>
  )
}

export default SinglePhoto;

export const query = graphql`
  query SinglePhotoView($slug: String) {
    webiny {
        listPhotos(where: {slug: $slug}) {
            data {
                slug
                image
                name
            }
        }
    }
  }
`