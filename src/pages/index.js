import React, { useEffect, useState } from 'react';
import {Box,Image,Heading,Grid,LinkBox, Button, Modal, ModalOverlay, ModalContent, ModalBody, ModalFooter, ModalCloseButton, useDisclosure, ModalHeader,} from '@chakra-ui/react';
import { Link } from 'gatsby';
import Layout from '../components/Layout'
import axios from 'axios';
import AddPhoto from '../components/AddPhoto';


export default function Index() {

  const [status, setStatus ] = useState('loading...');
  const [photos, setPhotos] = useState(null);
  const addPhoto = (photo) => setPhotos([...photos,photo]);
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (status !== "loading...") return;
    axios("/api/getPhoto").then(result => {
      if (result.status !== 200) {
        console.error("Error loading photos");
        console.error(result);
        return;
      }
      setPhotos(result.data.messages);
      setStatus("loaded");
    });
  }, [status]);

  return (
    <Layout>
      <Box p={6}>
      <Button onClick={onOpen}>Create Photo</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload Photo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddPhoto addPhoto={addPhoto}  />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} gap={6} pt={6}>
          {photos && photos.map((photo) => (
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

// export const pageQuery = graphql`
//   query IndexQuery {
//     webiny {
//       listPhotos {
//         data {
//           image
//           slug
//           id
//           name
//         }
//       }
//     }
//   }
// `