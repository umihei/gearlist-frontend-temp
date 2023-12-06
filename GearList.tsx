import { Box, SimpleGrid, Image, Text, VStack, Heading } from '@chakra-ui/react';
import {useNavigate} from "react-router-dom"

// サンプルのギアデータ
const gears = [
  { id: 1, name: 'Trekking Shoes', imageUrl: 'https://source.unsplash.com/ZxLzjl6mA_I' },
  { id: 2, name: 'Tent', imageUrl: 'https://source.unsplash.com/ZxLzjl6mA_I' },
  // 他のギアデータを追加
];

export const GearList: React.FC = () => {
  const navigate = useNavigate();

  const navigateToGearDetail = () => {
    navigate("/geardetail")
  }

  return (
    <Box p={8}>
      <Heading as="h1" mb={8}>
        ギア一覧
      </Heading>
      <SimpleGrid columns={3} spacing={6}>
        {gears.map((gear) => (
          <Box key={gear.id} borderWidth="1px" borderRadius="lg" overflow="hidden" onClick={() => navigateToGearDetail()} border="none" cursor="pointer">
            <Image src={gear.imageUrl} alt={gear.name} w="280px" h="250px"/>
            <VStack p={4} align="start">
              <Text fontSize="lg" fontWeight="bold">
                {gear.name}
              </Text>
              {/* 他のギアの情報を表示 */}
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};