import { Box, SimpleGrid, Image, Text, VStack, Heading } from '@chakra-ui/react';

// サンプルのギアデータ
const gears = [
  { id: 1, name: 'Trekking Shoes', imageUrl: 'gear1.jpg' },
  { id: 2, name: 'Tent', imageUrl: 'gear2.jpg' },
  // 他のギアデータを追加
];

export const GearListList: React.FC = () => {
  return (
    <Box p={8}>
      <Heading as="h1" mb={8}>
        ギアリスト一覧
      </Heading>
      <SimpleGrid columns={3} spacing={6}>
        {gears.map((gear) => (
          <Box key={gear.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={gear.imageUrl} alt={gear.name} />
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