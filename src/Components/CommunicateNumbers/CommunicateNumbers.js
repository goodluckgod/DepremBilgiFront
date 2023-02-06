import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from "@chakra-ui/react";


const CommunicateNumbers = () => {
    return (
        <Card bgGradient='linear(to-r, teal.500, green.500)' borderWidth={2} borderColor={"teal.200"} >
            <CardHeader>
                <Heading size='md'>Acil Yardım Numaraları</Heading>
            </CardHeader>
            <CardBody mt={-4}>
                <Stack divider={<StackDivider />} spacing='2'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Kahramanmaraş İl Afet ve Acil Durum Müdürlüğü
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            (0344) 224 14 14 - (0344) 223 75 79
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Adana İl Afet ve Acil Durum Müdürlüğü
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            (0322) 227 28 54 - (0322) 227 28 55
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Şanlıurfa İl Afet ve Acil Durum Müdürlüğü
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            (0414) 313 72 90 - (0414) 314 08 52
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Malatya İl Afet ve Acil Durum Müdürlüğü
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            (0422) 212 84 32
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Hatay İl Afet ve Acil Durum Müdürlüğü
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            (0326) 233 54 15-16-17
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Hatay İl Afet ve Acil Durum Müdürlüğü
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            (0326) 233 54 15-16-17
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Adıyaman İl Afet ve Acil Durum Müdürlüğü
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            (0416) 216 12 34-12-31
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Hatay İl Afet ve Acil Durum Müdürlüğü
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            (0412) 326 11 56
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
};

export default CommunicateNumbers;