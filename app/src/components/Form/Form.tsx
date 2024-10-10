import { Box, Button, Textarea, TextInput, Title } from '@mantine/core';

export function Form(){

    return(
        <Box aria-label='Formulaire'>
            <Title order={2}> 
                Formulaire
            </Title>
            <Textarea
                label='Nom'
                placeholder='Entré votre nom'
            />
            <Textarea
                label='Prénom'
                placeholder='Entré votre prénom'
            />
            <Textarea
                label='Email'
                placeholder='Entré votre émail'
            />
            <Textarea
                label='Message'
                placeholder='Entré un message'
            />

            <Button
                variant='filled'>Soumettre</Button>


        </Box>



    );
}