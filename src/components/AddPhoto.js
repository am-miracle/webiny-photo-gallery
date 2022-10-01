import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'

const AddPhoto = (props) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');


  const imageChanged = (newImage) => {
    setImage(newImage);
  }
  const nameChanged = e => {
    const val = e.target.value;
    setName(val);
  }
  const handleCreate = async event => {
    if(name  === '') return;
    await axios.post('/api/createPhoto', { name, image });
    const newList = photos.concat({ name, image });
    setPhotos(newList);
  }

  return (
  <Stack spacing={4}>
    <FormControl id="name">
      <FormLabel>Name</FormLabel>
      <Input
      type="text"
      onChange={e => nameChanged(e)}
      />
    </FormControl>
    <FormControl id="image">
      <FormLabel>Image</FormLabel>
      <Input
        type="file"
        onChange={newImage => imageChanged(newImage)}
        />
    </FormControl>
    <Stack spacing={10}>
      <Button
      onClick={e => handleCreate(e)}
        bg={'blue.400'}
        color={'white'}
        _hover={{
          bg: 'blue.500',
        }}>
        create photo
      </Button>
    </Stack>
  </Stack>
  )
}

export default AddPhoto