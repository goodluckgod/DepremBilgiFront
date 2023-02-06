// Counts Card Component

import { Box, Flex, Heading, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Config from "../../Config";

const Counts = () => {
    const [counts, setCounts] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(Config.apiURL + '/counts')
            .then(response => response.json())
            .then(data => {
                setCounts(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(true);
                setLoading(false);
            });
    }, []);

    console.log(counts);

    return (
        <Box bgGradient='linear(to-r, teal.500, green.500)' borderWidth={2} borderColor={"teal.200"} borderRadius={4} p={6} mb={4}>
            <Flex flexDirection={"row"} w="100%" justifyContent={"space-around"} textAlign="center">
                {counts && (
                    <>
                        <Flex direction="column">
                            <Heading size="lg">Vefat Sayısı</Heading>
                            <Heading size="md">{counts.dead_count}</Heading>
                        </Flex>
                        <Flex direction="column">
                            <Heading size="lg">Yaralı Sayısı</Heading>
                            <Heading size="md">{counts.wounded_count}</Heading>
                        </Flex>
                        <Flex direction="column">
                            <Heading size="lg">Yıkılan Bina Sayısı</Heading>
                            <Heading size="md">{counts.destroyed_building_count}</Heading>
                        </Flex>
                    </>

                )}

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
                    <Heading color={"red.700"}>
                        Bir hata oluştu.
                    </Heading>
                </Flex>
            )}

        </Box>
    );
}

export default Counts;
