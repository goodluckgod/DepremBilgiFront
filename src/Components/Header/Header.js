import React from "react";
import {
  Box,
  Heading,
  Flex,
  Button,
  useDisclosure,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Text,
  Input,
  Textarea
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import axios from "axios";
import Config from "../../Config";

const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [description, setDescription] = React.useState("");

  const sendToServer = () => {
    if (name === "" || address === "" || city === "") {
      alert("Lütfen tüm alanları doldurunuz!");
      return;
    }

    axios.post(Config.apiURL + "/add_missing_person", {
      name: name,
      address: address,
      city: city,
      description: description
    }).then((response) => {
      alert("Talebiniz başarıyla gönderildi!");
      onModalClose();
      setName("");
      setAddress("");
      setCity("");
      setDescription("");
    }).catch((error) => {
      alert("Bir hata oluştu!");
    });
  };


  return (
    <>
      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent bgGradient='linear(to-r, teal.500, green.500)' >
          <ModalHeader>     Enkaz Yardım Talebi Oluştur</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text >
              Lütfen bu alanı gereksiz kullanmayınız!
            </Text>

            <Flex mt={4} flexDir={"column"} gap={4}>
              <Input placeholder="Yardıma ihtiyacı olan kişinin ad soyadı." value={name} onChange={(e) => setName(e.target.value)} colorScheme="teal" variant={"filled"} isRequired focusBorderColor="black" />
              <Textarea placeholder="Adresi" value={address} onChange={(e) => setAddress(e.target.value)} colorScheme="teal" variant={"filled"} isRequired focusBorderColor="black" />
              <Input placeholder="Şehir" value={city} onChange={(e) => setCity(e.target.value)} colorScheme="teal" variant={"filled"} isRequired focusBorderColor="black" />
              <Textarea placeholder="Açıklama (Zorunlu Değil)" value={description} onChange={(e) => setDescription(e.target.value)} colorScheme="teal" variant={"filled"} isRequired focusBorderColor="black" />
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onModalClose}>
              İptal
            </Button>
            <Button colorScheme='blue' onClick={sendToServer}>Gönder</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        paddingX={[4, 8, 12]}
        paddingY={3}
        bgGradient='linear(to-r, teal.500, green.500)'
        color="white"
        {...props}
      >
        <Flex align="center" mr={8}>
          <Heading size={["sm", "md"]} fontWeight={200}>
            dogukanduran.com
          </Heading>
          <Box w={4} h={4} bgColor={"black"} marginX={2} borderRadius={"50%"} />
          <Heading size={["sm", "md"]} letterSpacing={"tighter"} fontWeight={500}>
            Deprem Bilgi
          </Heading>
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <HamburgerIcon />
        </Box>



        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
          <Button
            variant="outline"
            bgGradient='linear(to-r, teal.500, green.500)'
            _hover={{
              bgGradient: 'linear(to-r, teal.400, green.400)',
            }}
            onClick={onModalOpen}
          >
            Enkaz Yardım Talebi Oluştur
          </Button>
        </Box>
      </Flex>
    </>

  );
};

export default Header;
