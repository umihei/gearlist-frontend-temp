import { ArrowBackIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Flex align="center" justify="space-between" p="4">
      <IconButton
        aria-label="戻る"
        icon={<ArrowBackIcon color="white" />}
        onClick={handleBack}
        variant="ghost"
        bg="blue.500"
        _hover={{ bg: 'blue.600' }} // ホバー時の色を指定
      / >
        {/* 他のヘッダーコンテンツ */}
    </Flex>
  );
};