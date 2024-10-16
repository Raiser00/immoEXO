

import { MobileNavbar } from './components/topBar/MobileNavBar';

import { ImmoCard }  from './components/immoCard/ImmoCard';


import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Form } from './components/Form/Form';

function App() {
  

  return (<MantineProvider>
    <MobileNavbar/>
    <ImmoCard/>
    <Form/>
    
    </MantineProvider>);

  
}

export default App
