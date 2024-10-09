import {Image, Flex, Text } from '@mantine/core';
import Tipie from '../../assets/imageImmo/tipie1.jpg';
import { useState, useEffect } from 'react';


export function ImmoCard() {

    const [immo,setImmo] = useState({
        Nom : '',
        Prix: '',
        Description: '',
    });

    useEffect(() => {
        fetch('http://localhost:5050/api/immo')
            .then((response) => response.json())
            .then((data) => setImmo(data))
            .catch((error) => console.error('Erreur lors du fetch des données:', error));
    }, []);

    return (
        <Flex>

            <Image src={Tipie}/>

            <Text size='md'>Nom: {immo.Nom}</Text>
            <Text size='md'>Prix: {immo.Prix}</Text>
            <Text size='md'>Description: {immo.Description}</Text>

        </Flex>

  );


}

