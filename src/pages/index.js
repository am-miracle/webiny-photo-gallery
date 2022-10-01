import React, { useEffect, useState } from 'react';
import {Box,Image,Heading,Grid,LinkBox, Button, Modal, ModalOverlay, ModalContent, ModalBody, ModalFooter, ModalCloseButton, useDisclosure, ModalHeader, FormControl, FormLabel, Input, Stack} from '@chakra-ui/react';
import { Link } from 'gatsby';
import Layout from '../components/Layout'
import axios from 'axios';
import AddPhoto from '../components/AddPhoto';


export default function Index() {

  const [status, setStatus ] = useState('loading...');
  const [photos, setPhotos] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [slug, setSlug] = useState(null);

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

  // const imageChanged = (newImage) => {
  //   setImage(newImage);
  // }
  const nameChanged = evt => {
    const val = evt.target.value;
    setName(val);
  }
  const slugChanged = evt => {
    const val = evt.target.value;
    setSlug(val);
  }
  const handleCreate = async event => {
    if(name && slug === '') return;
    await axios.post('/api/createPhoto', { name, image, slug });
    const newList = photos.concat({ name, image, slug });
    setPhotos(newList);
  }

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
          <Stack spacing={4}>
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input
         type="text"
         onChange={evt => nameChanged(evt)}
         />
      </FormControl>
      <Stack spacing={10}>
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        align={'start'}
        justify={'space-between'}>
        {/* <FormControl id="image">
          <FormLabel>Image</FormLabel>
          <Input
            type="file"
            onChange={newImage => imageChanged(newImage)}
             />
        </FormControl> */}
        <FormControl id="slug">
          <FormLabel>Slug</FormLabel>
          <Input
            type="number"
            onChange={evt => slugChanged(evt)}
           />
        </FormControl>
        </Stack>
        <Button
        onClick={evt => handleCreate(evt)}
          bg={'blue.400'}
          color={'white'}
          _hover={{
            bg: 'blue.500',
          }}>
          create photo
        </Button>
      </Stack>
    </Stack>
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