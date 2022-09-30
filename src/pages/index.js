import React from 'react';
import {Box,Image,Heading,Grid,LinkBox,} from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout'


export default function Index({data}) {

  return (
    <Layout>
      <Box>
        <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} gap={6} p={6}>
          {data.webiny.listPhotos.data.map((photo) => (
            <LinkBox as={'figure'} key={photo.id} roundedTop={'4'} overflow={'hidden'} shadow={'md'}>
              <Image src={photo.image} alt={`${photo.name} image`} />
              <Heading p={8} fontSize={'lg'} _hover={{ textDecoration: 'underline'}}>
                <Link to={`/${photo.slug}`}>{photo.name}</Link>
              </Heading>
            </LinkBox>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    webiny {
      listPhotos {
        data {
          image
          slug
          id
          name
        }
      }
    }
  }
`