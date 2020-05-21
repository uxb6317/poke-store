import React from 'react';
import { Text } from '@chakra-ui/core';

const SolidBadge = ({ text, color }) => {
  return (
    <Text
      borderRadius='md'
      px={3}
      py='px'
      border='1px'
      borderColor={color ? color : 'gray.200'}
      color={color && 'white'}
      bg={color ? color : 'gray.200'}
      fontWeight='semibold'
      textTransform='capitalize'
    >
      {text}
    </Text>
  );
};

export default SolidBadge;
