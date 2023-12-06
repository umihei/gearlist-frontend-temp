import React, { useState } from 'react';
import {
  VStack,
  Heading,
  Box,
  Input,
  Textarea,
  Button,
  Select,
  FormLabel,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react';
import {useNavigate} from "react-router-dom"

export const GearRegistrationForm = () => {
  const [gearName, setGearName] = useState('');
  const [gearWeight, setGearWeight] = useState('');
  const [gearCategory, setGearCategory] = useState('');
  const [gearBrand, setGearBrand] = useState('');
  const [gearImage, setGearImage] = useState('');
  const [gearDescription, setGearDescription] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [imageFile, setImageFile] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    // フォームのデータを使用してギアを登録する処理をここに追加
    console.log('ギア名:', gearName);
    console.log('重さ:', gearWeight);
    console.log('カテゴリ:', gearCategory);
    console.log('ブランド:', gearBrand);
    console.log('画像URL:', gearImage);
    console.log('画像ファイル:', imageFile);

    navigate("/")
  };

  const handleWeightChange = (value) => {
    const onlyNums = value.replace(/[^0-9]/g, '');
    setGearWeight(onlyNums);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageFile(file);
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <VStack spacing={8} align="flex-start" p={8}>
      <Heading size="lg">ギアの登録</Heading>
      <Box w="100%">
        <form onSubmit={handleSubmit}>
          <FormLabel htmlFor="gearName">ギアの名前</FormLabel>
          <Input
            id="gearName"
            placeholder="ギアの名前"
            value={gearName}
            onChange={(e) => setGearName(e.target.value)}
            mb={4}
          />
          <FormLabel htmlFor="gearWeight">重さ</FormLabel>
          <InputGroup size="md">
            <Input
              id="gearWeight"
              placeholder="重さ"
              value={gearWeight}
              onChange={(e) => handleWeightChange(e.target.value)}
              mb={4}
            />
            <InputRightAddon children="グラム" />
          </InputGroup>
          <FormLabel htmlFor="gearCategory">カテゴリ</FormLabel>
          <Select
            id="gearCategory"
            placeholder="カテゴリ"
            value={gearCategory}
            onChange={(e) => setGearCategory(e.target.value)}
            mb={4}
          >
            {/* カテゴリの選択肢を追加 */}
            <option value="カテゴリ1">カテゴリ1</option>
            <option value="カテゴリ2">カテゴリ2</option>
            <option value="カテゴリ3">カテゴリ3</option>
          </Select>
          <FormLabel htmlFor="gearBrand">ブランド</FormLabel>
          <Input
            id="gearBrand"
            placeholder="ブランド"
            value={gearBrand}
            onChange={(e) => setGearBrand(e.target.value)}
            mb={4}
          />
          <FormLabel htmlFor="gearImage">写真を選択</FormLabel>
          <InputGroup>
            <Input
              type="file"
              id="gearImage"
              accept="image/*"
              display="none" // ファイル選択ボタンを非表示にする
              onChange={handleImageChange}
            />
            <Button as="label" htmlFor="gearImage" colorScheme="blue">
              Choose File
            </Button>
          </InputGroup>
          {imagePreview && (
            <Box mb={4}>
              <Image src={imagePreview} alt="Gear Preview" boxSize="150px" />
            </Box>
          )}
          <FormLabel htmlFor="gearDescription">説明</FormLabel>
          <Textarea
            id="gearDescription"
            placeholder="ギアの説明"
            value={gearDescription}
            onChange={(e) => setGearDescription(e.target.value)}
            mb={4}
          />
          <Button type="submit" colorScheme="blue">
            登録
          </Button>
        </form>
      </Box>
    </VStack>
  );
};