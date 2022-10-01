// import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
// import axios from 'axios';
// import React, { useState } from 'react'

// const AddPhoto = () => {
//   const [image, setImage] = useState(null);
//   const [name, setName] = useState('');
//   const [slug, setSlug] = useState(null);


//   const ImageChanged = (newImage) => {
//     setImage(newImage);
//   }
//   const nameChanged = evt => {
//     const val = evt.target.value;
//     setName(val);
//   }
//   const slugChanged = evt => {
//     const val = evt.target.value;
//     setSlug(val);
//   }
//   const handleCreate = async event => {
//     if(text === '') return;
//     await axios.post('/api/createPhoto', { name, image, slug });
//     const newList = photos.concat({ name, image, slug });
//     setPhotos(newList);
//   }

//   return (
//     <Stack spacing={4}>
//       <FormControl id="name">
//         <FormLabel>Name</FormLabel>
//         <Input
//          type="text"
//          onChange={evt => nameChanged(evt)}
//          />
//       </FormControl>
//       <Stack spacing={10}>
//       <Stack
//         direction={{ base: 'column', sm: 'row' }}
//         align={'start'}
//         justify={'space-between'}>
//         <FormControl id="image">
//           <FormLabel>Image</FormLabel>
//           <Input type="file" />
//         </FormControl>
//         <FormControl id="slug">
//           <FormLabel>Slug</FormLabel>
//           <Input
//             type="number"
//             onChange={evt => slugChanged(evt)}
//            />
//         </FormControl>
//         </Stack>
//         <Button
//         onClick={evt => handleCreate(evt)}
//           bg={'blue.400'}
//           color={'white'}
//           _hover={{
//             bg: 'blue.500',
//           }}>
//           create photo
//         </Button>
//       </Stack>
//     </Stack>
//   )
// }

// export default AddPhoto