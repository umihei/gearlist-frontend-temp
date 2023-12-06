import React from 'react';
import {
  VStack,
  Heading,
  HStack,
  Box,
  Text,
  Image,
  IconButton,
  Button
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import {useNavigate} from "react-router-dom"
import {useEffect, memo} from "react"


export const Home = () => {
  const navigate = useNavigate();

  // 仮のデータ
  const gearList = [
    { id: 1, name: 'テント', imageUrl: 'https://source.unsplash.com/ZxLzjl6mA_I' },
    { id: 2, name: 'テント', imageUrl: 'https://source.unsplash.com/ZxLzjl6mA_I' },
    { id: 3, name: 'テント', imageUrl: 'https://source.unsplash.com/ZxLzjl6mA_I' },
    { id: 4, name: 'テント', imageUrl: 'https://source.unsplash.com/ZxLzjl6mA_I' },
    // 他のギアデータも同様に追加
  ];

  const navigateToGearRegistration = () => {
    navigate("/gearresister")
  };

  const navigateToGearDetail = (gearid) => {
    // navigate(`/gear/${gearid}`)
    navigate(`/geardetail`)
  }

  const navigateToGearListRegistration = () => {
    // navigate(`/gear/${gearid}`)
    navigate(`/gearlistregistration`)
  }

  const navigateToGearList = () => {
    // navigate(`/gear/${gearid}`)
    navigate(`/gearlist`)
  }

  const navigateToGearListList = () => {
    // navigate(`/gear/${gearid}`)
    navigate(`/gearlistlist`)
  }

  const navigateToGearListDetail = () => {
    // navigate(`/gear/${gearid}`)
    navigate(`/gearlistdetail`)
  }

  return (
    <VStack spacing={8} align="flex-start" p={8}>
      <Heading size="lg">ホーム</Heading>
      <Box w="100%">
        <VStack spacing={4} align="flex-start">
          <Box w="100%">
          <HStack mb="4" ml="4">
          <Heading size="md">ギア</Heading>
          <IconButton
            icon={<AddIcon />}
            aria-label="Add Gear"
            onClick={() => navigateToGearRegistration()}
            colorScheme="blue"
            variant="outline"
            ml="8"
            borderRadius="full"
          />
          <Button ml="4" onClick={() => navigateToGearList()}>
            すべて表示
          </Button>
        </HStack>
            <HStack spacing={4} mt={2} flexWrap="wrap">
            {gearList.map((gear) => (
                <Box key={gear.id} borderWidth="1px" borderRadius="lg" p={2} mb={4} cursor="pointer" // カーソルをポインターに変更
                onClick={() => navigateToGearDetail(gear.id)} border="none" >
                  <Image src={gear.imageUrl} alt={gear.name} boxSize="150px" />
                  <Text>{gear.name}</Text>
                </Box>
              ))}
            </HStack>
          </Box>
          <Box w="100%" mt={8}>
          <HStack mb="4" ml="4">
          <Heading size="md">ギアリスト</Heading>
          <IconButton
            icon={<AddIcon />}
            aria-label="Add GearList"
            onClick={() => navigateToGearListRegistration()}
            colorScheme="blue"
            variant="outline"
            ml="8"
            borderRadius="full"
          />
          <Button ml="4" onClick={() => navigateToGearListList()}>
            すべて表示
          </Button>
        </HStack>
            <HStack spacing={4} mt={2} flexWrap="wrap">
              {gearList.map((gear) => (
                <Box key={gear.id} borderWidth="1px" borderRadius="lg" p={2} mb={4}
                onClick={() => navigateToGearListDetail()} cursor="pointer" border="none">
                  <Image src={gear.imageUrl} alt={gear.name} boxSize="150px" />
                  <Text>{gear.name}</Text>
                </Box>
              ))}
            </HStack>
          </Box>
        </VStack>
      </Box>
    </VStack>
  );
};
