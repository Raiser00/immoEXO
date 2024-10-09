import {Image, Flex, Text } from '@mantine/core';
import Tipie from '../../assets/imageImmo/tipie1.jpg';

export function ImmoCard() {
  return (
    <Flex>

        <Image src={Tipie}/>

        <Text size='md'>Nom: Tipie de Manitob1</Text>
        <Text size='md'>Prix: 12000 euros</Text>
        <Text size='md'>Description: Tipie par lequel Manitob1 a débuter son aventure.</Text>






    </Flex>

  );
}

