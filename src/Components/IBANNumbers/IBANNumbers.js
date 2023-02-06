import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from "@chakra-ui/react";


const IBANNumbers = () => {
    return (
        <Card bgGradient='linear(to-r, teal.500, green.500)' borderWidth={2} borderColor={"teal.200"} mb={4}>
            <CardHeader>
                <Heading size='md'>Bağış Numaraları</Heading>
            </CardHeader>
            <CardBody mt={-4}>
                <Stack divider={<StackDivider />} spacing='2'>
                    <Box>
                        <Heading size='sm' textTransform='uppercase'>
                            AFAD SMS
                        </Heading>
                        <Text pt='1' fontSize='sm'>
                            DEPREM yaz, 1866’ya gönder!
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='sm' textTransform='uppercase'>
                            T.C. ZİRAAT BANKASI A.Ş. ANKARA KAMU KURUMSAL ŞUBESİ
                        </Heading>
                        <Text pt='1' fontSize='sm'>
                            TL: TR73 0001 0017 4555 5555 5552 04 <br />
                            USD: TR 46 0001 0017 4555 5555 5552 05 <br />
                            EURO: TR 19 0001 0017 4555 5555 5552 06 <br />
                            Banka Swift Kod No: TCZBTR2A <br />
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='sm' textTransform='uppercase'>
                            TÜRKİYE VAKIFLAR BANKASI T.A.O KIZILAY TİCARİ ŞUBE
                        </Heading>
                        <Text pt='1' fontSize='sm'>
                            TL: TR62 0001 5001 5800 7299 3175 99 <br />
                            USD: TR43 0001 5001 5804 8013 0940 88 <br />
                            EURO: TR32 0001 5001 5804 8013 0940 92 <br />
                            Banka Swift Kod No: TVBATR2A <br />
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='sm' textTransform='uppercase'>
                            ZİRAAT KATILIM BANKASI A.Ş.KURUMSAL ANKARA ŞUBESİ
                        </Heading>
                        <Text pt='1' fontSize='sm'>
                            TL: TR70 0020 9000 0041 2303 0000 10 <br />
                            USD: TR43 0020 9000 0041 2303 0000 11 <br />
                            EURO: TR16 0020 9000 0041 2303 0000 12 <br />
                            Banka Swift Kod No: ZKBATRIS <br />
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='sm' textTransform='uppercase'>

                            TÜRKİYE HALK BANKASI A.Ş BAKANLIKLAR ŞUBESİ
                        </Heading>
                        <Text pt='1' fontSize='sm'>
                            TL: TR88 0001 2009 4080 0005 0002 28 <br />
                            USD: TR75 0001 2009 4080 0058 0002 92 <br />
                            EURO: TR48 0001 2009 4080 0058 0002 93 <br />
                            Banka Swift Kod No: TRHBTR2A <br />
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='sm' textTransform='uppercase'>

                            KUVEYT TÜRK KATILIM BANKASI A.Ş. BALGAT ŞUBESİ
                        </Heading>
                        <Text pt='1' fontSize='sm'>
                            TL: TR67 0020 5000 0951 0603 5000 09 <br />
                            USD: TR61 0020 5000 0951 0603 5001 17 <br />
                            EURO: TR34 0020 5000 0951 0603 5001 18 <br />
                            Banka Swift Kod No: KTEFTRIS <br />
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='sm' textTransform='uppercase'>

                            VAKIF KATILIM BANKASI A.Ş. KURUMSAL ANKARA ŞUBESİ
                        </Heading>
                        <Text pt='1' fontSize='sm'>

                            TL: TR25 0021 0000 0001 6349 0000 06 <br />
                            USD: TR57 0021 0000 0001 6349 0001 09 <br />
                            EURO: TR30 0021 0000 0001 6349 0001 10 <br />
                            Banka Swift Kod No: VAKFTRIS <br />
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
};

export default IBANNumbers;