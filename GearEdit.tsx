import React, { useState } from 'react';
import { VStack, Heading, Box, Input, Textarea, Button, Select, FormLabel, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const GearEdit = () => {
  const [editedName, setEditedName] = useState('');
  const [editedWeight, setEditedWeight] = useState('');
  const [editedCategory, setEditedCategory] = useState('');
  const [editedBrand, setEditedBrand] = useState('');
  const [editedImageUrl, setEditedImageUrl] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const editedGear = {
      name: editedName,
      weight: editedWeight,
      category: editedCategory,
      brand: editedBrand,
      imageUrl: editedImageUrl,
      description: editedDescription,
    };

    // navigate(`/gear/${gearId}`, { state: { editedGear } });
    navigate(`/geardetail`, { state: { editedGear } });
  };

  const handleWeightChange = (value) => {
    const onlyNums = value.replace(/[^0-9]/g, '');
    setEditedWeight(onlyNums);
  };

  return (
    <VStack spacing={8} align="flex-start" p={8}>
      <Heading size="lg">ギアの編集</Heading>
      <Box w="100%">
        <form onSubmit={handleSubmit}>
          <FormLabel htmlFor="gearName">ギアの名前</FormLabel>
          <Input
            id="gearName"
            placeholder="ギアの名前"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            mb={4}
          />
          <FormLabel htmlFor="gearWeight">重さ</FormLabel>
          <InputGroup size="md">
            <Input
              id="gearWeight"
              placeholder="重さ"
              value={editedWeight}
              onChange={(e) => handleWeightChange(e.target.value)}
              mb={4}
            />
            <InputRightAddon children="グラム" />
          </InputGroup>
          <FormLabel htmlFor="gearCategory">カテゴリ</FormLabel>
          <Select
            id="gearCategory"
            placeholder="カテゴリ"
            value={editedCategory}
            onChange={(e) => setEditedCategory(e.target.value)}
            mb={4}
          >
            <option value="カテゴリ1">カテゴリ1</option>
            <option value="カテゴリ2">カテゴリ2</option>
            <option value="カテゴリ3">カテゴリ3</option>
          </Select>
          <FormLabel htmlFor="gearBrand">ブランド</FormLabel>
          <Input
            id="gearBrand"
            placeholder="ブランド"
            value={editedBrand}
            onChange={(e) => setEditedBrand(e.target.value)}
            mb={4}
          />
          <FormLabel htmlFor="gearImageUrl">画像URL</FormLabel>
          <Input
            id="gearImageUrl"
            placeholder="画像URL"
            value={editedImageUrl}
            onChange={(e) => setEditedImageUrl(e.target.value)}
            mb={4}
          />
          <FormLabel htmlFor="gearDescription">説明</FormLabel>
          <Textarea
            id="gearDescription"
            placeholder="ギアの説明"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            mb={4}
          />
          <Button type="submit" colorScheme="blue">
            更新
          </Button>
        </form>
      </Box>
    </VStack>
  );
};
