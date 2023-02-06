import React, { useState, useEffect } from 'react';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  ChakraProvider,
  Flex,
  Grid,
  GridItem,
  theme,
} from '@chakra-ui/react';
import Header from './Components/Header/Header';
import Earthquekes from './Components/LastEarthquekes/Earthquekes';
import CommunicateNumbers from './Components/CommunicateNumbers/CommunicateNumbers';

import './App.css';
import axios from 'axios';
import Config from './Config';
import Counts from './Components/Counts/Counts';
import IBANNumbers from './Components/IBANNumbers/IBANNumbers';
import MissingPersons from './Components/MissingPersons/MissingPersons';

function App() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    axios.get(Config.apiURL + '/alerts').then((response) => {
      setAlerts(response.data);
    });
  }, []);


  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" bg={"black"} minH="100vh">
        <Header />
        <Flex px={[4, 8, 12]} mt={4} flexDirection={"column"} gap={2}>
          {alerts.length > 0 && alerts.map((alert) => (
            <Alert status='error' bgGradient='linear(to-r, teal.500, green.500)' borderWidth={1} borderColor={"teal.200"} borderRadius={4}>
              <AlertIcon />
              <AlertTitle>{alert.title}</AlertTitle>
              <AlertDescription>{alert.description}</AlertDescription>
            </Alert>
          ))}
        </Flex>
        <Grid px={[4, 8, 12]} pt={4} display={["flex", "flex", "grid", "grid"]} justifyContent={"space-around"} flexDirection={"column"} templateRows='repeat(1, 2fr)'
          templateColumns={'repeat(2, 2fr)'}
          gap={4}>
          <GridItem gap={8}>
            <Counts />
            <MissingPersons />
            <IBANNumbers />
            <CommunicateNumbers />
          </GridItem>
          <GridItem>
            <Earthquekes />
          </GridItem>


        </Grid>
      </Flex>

    </ChakraProvider >
  );
}

export default App;
