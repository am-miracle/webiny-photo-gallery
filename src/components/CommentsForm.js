import { Box, Button, FormControl, FormLabel, Input, InputGroup, Textarea, VStack } from '@chakra-ui/react'
import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
// import { submitComment } from '../lib/index';

const CommentsForm = ({slug}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")
    const [serverResponse, setServerResponse] = useState(``)

    const resetForm = () => {
        setComment("")
        setName("")
        setEmail("")
    }

    const submitComment = async (event) => {
        event.preventDefault();
        try {
            const response = await window
             .fetch(`/api/form`, {
                method: 'POST',
                // mode: 'no-cors',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name,
                  email,
                  comment,
                }),
            })
            .then(res => res.json())
            setServerResponse(response)
            resetForm();
        }
        catch (err) {
            console.error(err);
        }
    }

  return (
    <Box bg="white" borderRadius="lg" shadow={'md'} py={4}>
        <Box m={8} color="#0B0E3F">
            <form method="POST" onSubmit={submitComment} action="/api/form">
                <VStack spacing={5}>
                    <div>Server response: {serverResponse}</div>
                    <FormControl id="name" isRequired>
                        <FormLabel aria-required>Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                            <Input type="text" size="md"
                            value={name}
                            name="name"
                            // {...register("name", { required: true })}
                            // value={value[`name`] || ``}
                            // onChange={handleChange}
                            onChange={event => setName(event.target.value)}
                        />
                        </InputGroup>
                    </FormControl>
                    <FormControl id="email" isRequired>
                        <FormLabel aria-required>Email</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                        <Input type="email" size="md"
                            value={email}
                            // {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            name="email"
                            // value={value[`email`] || ``}
                            // onChange={handleChange}
                            onChange={event => setEmail(event.target.value)}
                        />
                        </InputGroup>
                    </FormControl>
                    <FormControl id="comment" isRequired>
                        <FormLabel aria-required>Comment</FormLabel>
                        <Textarea
                        borderColor="gray.300"
                        _hover={{
                            borderRadius: 'gray.300',
                        }}
                        placeholder="comment"
                        // value={value[`comment`] || ``}
                        // onChange={handleChange}
                        value={comment}
                        name="comment"
                        // {...register("comment", { required: true })}
                        onChange={event => setComment(event.target.value)}
                        />
                    </FormControl>
                    <FormControl id="name" float="right">
                        <Button
                        type='submit'
                        variant="solid"
                        bg="#0D74FF"
                        color="white"
                        _hover={{bg: 'blue.700'}}>
                        Send Comment
                        </Button>
                    </FormControl>
                </VStack>
            </form>
        </Box>
    </Box>
  )
}

export default CommentsForm