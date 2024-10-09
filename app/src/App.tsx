

import { MobileNavbar } from './components/topBar/MobileNavBar';

import { ImmoCard }  from './components/immoCard/ImmoCard';


import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

function App() {
  

  return (<MantineProvider>
    <MobileNavbar/>
    <ImmoCard/>
    
    </MantineProvider>);

  
}

export default App
