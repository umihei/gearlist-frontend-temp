import React, { useState } from 'react';
import {
  VStack,
  Heading,
  Box,
  Input,
  Textarea,
  Button,
  SimpleGrid,
  Image,
  Text
} from '@chakra-ui/react';

// サンプルデータ（自分のギア）
const gears = [
  { id: 1, name: 'トレッキングシューズ', imageUrl: 'https://source.unsplash.com/ZxLzjl6mA_I' },
  { id: 2, name: 'テント', imageUrl: 'https://source.unsplash.com/ZxLzjl6mA_I' },
  // 他のギアを追加
];

export const GearListRegistration = () => {
  const [listName, setListName] = useState('');
  const [listDescription, setListDescription] = useState('');
  const [selectedGears, setSelectedGears] = useState([]);

  const handleGearSelect = (gearId) => {
    const alreadySelected = selectedGears.includes(gearId);
    if (alreadySelected) {
      setSelectedGears(selectedGears.filter((id) => id !== gearId));
    } else {
      setSelectedGears([...selectedGears, gearId]);
    }
  };

  const handleCreateList = () => {
    // 選択されたギアのリストを作成する処理をここに追加
    console.log('選択されたギア:', selectedGears);
  };

  return (
    <VStack spacing={8} align="flex-start" p={8}>
      <VStack align="flex-start" w="100%">
        <Heading size="lg">ギアリストを作成</Heading>
        <Input
          placeholder="ギアリスト名"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          mb={4}
        />
        <Textarea
          placeholder="ギアリストの説明"
          value={listDescription}
          onChange={(e) => setListDescription(e.target.value)}
          mb={4}
        />
      </VStack>

      <SimpleGrid columns={3} spacing={4} w="100%">
        {gears.map((gear) => (
          <Box
            key={gear.id}
            maxW="200px"
            borderWidth={selectedGears.includes(gear.id) ? '3px' : '0px'}
            borderRadius="lg"
            overflow="hidden"
            cursor="pointer"
            onClick={() => handleGearSelect(gear.id)}
            borderColor={selectedGears.includes(gear.id) ? 'blue.500' : 'gray.200'}
          >
            <Image src={gear.imageUrl} alt={gear.name} w="200px" h="180px" borderRadius="10px"/>
            <Box p="4">
              <Text>{gear.name}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      <Button onClick={handleCreateList} colorScheme="blue" mt={8}>
        ギアリストを作成
      </Button>
    </VStack>
  );
};
