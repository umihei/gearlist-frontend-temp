import { Box, Heading, Table, Tbody, Td, Text, Th, Thead, Tr, Image, IconButton } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons'; // 編集アイコンをインポート
import {useNavigate} from "react-router-dom"

interface GearDetailProps {
  name: string;
  weight: number;
  category: string;
  brand: string;
  imageUrl: string;
  description: string;
}

export const GearDetail: React.FC<GearDetailProps> = ({
  name,
  weight,
  category,
  brand,
  imageUrl,
  description,
}: GearDetailProps) => {

  const navigate = useNavigate()

  const navigateToGearEdit = () => {
    navigate("/gearedit")
  }

  name = "テント"
  weight = 300
  category = "住居"
  brand = "ゼログラム"
  imageUrl = "https://source.unsplash.com/ZxLzjl6mA_I"
  description = ""

  return (
    <Box p={4}>
      {/* 編集アイコンとリンク */}
      <IconButton
          position="absolute"
          top={4}
          right={4}
          aria-label="Edit gear"
          icon={<EditIcon />}
          colorScheme="blue"
          onClick={() => navigateToGearEdit()}
        />
      <Box position="relative" mb={4}>
        
        <Image src={imageUrl} alt={name} objectFit='cover' w="1770px" h="320px" />
        <Box
          position="absolute"
          bottom={4}
          left={4}
          color="white"
          textShadow="2px 2px 4px rgba(0,0,0,0.5)" // テキストに影をつけて白抜き感を演出
        >
          <Heading as="h2" size="lg">
            {name}
          </Heading>
        </Box>
        
      </Box>
      <Table variant="simple">

        <Tbody>
          <Tr>
            <Td>Gear Name</Td>
            <Td>{name}</Td>
          </Tr>
          <Tr>
            <Td>Weight</Td>
            <Td>{weight} grams</Td>
          </Tr>
          <Tr>
            <Td>Category</Td>
            <Td>{category}</Td>
          </Tr>
          <Tr>
            <Td>Brand</Td>
            <Td>{brand}</Td>
          </Tr>
          <Tr>
            <Td>Description</Td>
            <Td>{description}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};
