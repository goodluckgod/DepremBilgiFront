import { useState, useEffect } from 'react';
import { Box, Button, Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import Config from '../../Config';

const MissingPersons = () => {
    const [missingPersons, setMissingPersons] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currentMissingPerson, setCurrentMissingPerson] = useState(0);

    useEffect(() => {
        fetch(Config.apiURL + '/missing_persons')
            .then(response => response.json())
            .then(data => {
                setMissingPersons(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(true);
                setLoading(false);
            });
    }, []);

    return (
        <Box bgGradient='linear(to-r, teal.500, green.500)' borderWidth={2} borderColor={"teal.200"} borderRadius={4} p={6} mb={4}>
            {missingPersons && (
                <>
                    <Flex direction="column" textAlign={"center"}>
                        <Heading size="md">Kayıp Kişi Sayısı: {missingPersons.length}</Heading>

                    </Flex>
                </>
            )}
            <Flex flexDirection={"row"} w="100%" justifyContent={"space-around"} textAlign="center" alignItems={"center"} mt={2}>
                <Button onClick={() => {
                    if (currentMissingPerson > 0) {
                        setCurrentMissingPerson(currentMissingPerson - 1);
                    } else {
                        alert("İlk kayıp kişiye ulaştınız.");
                    }
                }}>Önceki</Button>


                {missingPersons && (
                    <>
                        <Flex direction="column" >
                            <Heading size="lg">Kayıp Kişi</Heading>
                            <Heading size="md">{missingPersons[currentMissingPerson].name}</Heading>
                            <Text>{missingPersons[currentMissingPerson].city}</Text>
                            <Text>{missingPersons[currentMissingPerson].address}</Text>
                            <Text>{missingPersons[currentMissingPerson].description}</Text>
                        </Flex>
                    </>
                )}


                <Button onClick={() => {
                    if (currentMissingPerson < missingPersons.length - 1) {
                        setCurrentMissingPerson(currentMissingPerson + 1);
                    } else {
                        alert("Son kayıp kişiye ulaştınız.");
                    }
                }}>Sonraki</Button>

            </Flex>
            {loading && (
                <Flex w={"full"} h="20" justifyContent={"center"} alignItems="center" >
                    <Spinner
                        thickness='4px'
                        mr={4}
                    />
                    <Heading>
                        Yükleniyor...
                    </Heading>
                </Flex>
            )}
            {error && (
                <Flex w={"full"} h="20" justifyContent={"center"} alignItems="center" >
                    <Heading>
                        Hata oluştu.
                    </Heading>
                </Flex>
            )}
        </Box>
    );
}

export default MissingPersons;

