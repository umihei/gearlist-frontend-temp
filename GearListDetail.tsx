import React from 'react';
import { VStack, Heading, Box, Text, Table, Tbody, Td, Tr, Image, SimpleGrid } from '@chakra-ui/react';

interface GearListDetailProps {
  name: string;
  description: string;
  gearList: { id: number; name: string; imageUrl: string }[];
}

export const GearListDetail: React.FC<GearListDetailProps> = ({
  name,
  description,
  gearList,
}: GearListDetailProps) => {

  const gearListMock = [
        {
          id: 1,
          name: '登山靴',
          imageUrl: 'https://source.unsplash.com/random',
        },
        {
          id: 2,
          name: 'バックパック',
          imageUrl: 'https://source.unsplash.com/random',
        },
        // 他のギアを追加
      ]

  return (
    <VStack spacing={8} align="flex-start" p={8}>
      <Box position="relative" mb={4}>
        {/* 画像 */}
        <Image src="https://source.unsplash.com/random" alt={name} objectFit="cover" w="1300px" h="350px" />
        <Box
          position="absolute"
          bottom={4}
          left={4}
          color="white"
          textShadow="2px 2px 4px rgba(0,0,0,0.5)"
        >
          {/* ギアリスト名 */}
          <Heading as="h2" size="lg">
            {name}
          </Heading>
        </Box>
      </Box>
      <Table variant="simple">
        <Tbody>
          <Tr>
            <Td>ギアリスト名</Td>
            <Td>{name}</Td>
          </Tr>
          <Tr>
            <Td>説明</Td>
            <Td>{description}</Td>
          </Tr>
        </Tbody>
      </Table>
      <Heading as="h3" size="md" mb={4}>
        ギアリストに含まれるギア
      </Heading>
      <SimpleGrid columns={3} spacing={4} w="100%">
        {gearListMock.map((gear) => (
          <Box
            key={gear.id}
            maxW="200px"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            cursor="pointer"
            borderColor="gray.200"
          >
            <Image src={gear.imageUrl} alt={gear.name} w="200px" h="200px"/>
            <Box p="4">
              <Text>{gear.name}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
};
