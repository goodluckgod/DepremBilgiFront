import axios from "axios";
import React, { useState, useEffect } from "react";
import {
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Heading,
    Box,
    Flex,
    Spinner,
    Text,
} from "@chakra-ui/react";
import Config from "../../Config";

const Earthquekes = () => {
    const [earthquekes, setEarthquekes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(Config.apiURL + "/earthquekes")
            .then((response) => {
                setEarthquekes(response.data.filter((earthqueke) => earthqueke.mag > 4 && new Date(earthqueke.date) > new Date(new Date().getTime() - 24 * 60 * 60 * 1000)));
                setLoading(false);
            })
            .catch((error) => {
                setError(true);
                setLoading(false);
            });
    }, []);


    return (
        <TableContainer borderRadius={4} bgGradient='linear(to-r, teal.500, green.500)' w={["100%", "100%", "500px", "600px", "800px", "1000px"]} maxH={["700px", "1000px", "1200px"]} overflowY={"auto"} borderWidth={2} borderColor={"teal.200"}>
            <Heading p={4} pb={0}>
                Son 24 Saatteki Deprem Bilgileri
            </Heading>
            <Text px={4} pb={2} color={"black"}>
                Sadece büyüklüğü 4 ve üzeri olan depremler listelenmektedir.
            </Text>
            <Table variant='simple' colorScheme='teal' >
                <Thead bgGradient='linear(to-r, teal.500, green.500)' position={"sticky"} top={0}>
                    <Tr>
                        <Th color={"black"}>Lokasyon</Th>
                        <Th color={"black"} isNumeric>Büyüklük</Th>
                        <Th color={"black"} isNumeric>Derinlik</Th>
                        <Th color={"black"} isNumeric>Zaman</Th>
                    </Tr>
                </Thead>

                <Tbody>

                    {earthquekes.map((earthqueke) => (
                        <Tr key={earthqueke.ID}>
                            <Th color={"black"}>{earthqueke.lokasyon}</Th>
                            <Th color={"black"} isNumeric>{earthqueke.mag}</Th>
                            <Th color={"black"} isNumeric>{earthqueke.depth}</Th>
                            <Th color={"black"} isNumeric>{new Date(earthqueke.date).toLocaleString()}</Th>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
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
                <Flex w={"full"} h="20" justifyContent={"center"} alignItems="center">
                    <Heading color={"red.700"}>
                        Bir hata oluştu
                    </Heading>
                </Flex>
            )}
        </TableContainer>
    );
}

export default Earthquekes;
