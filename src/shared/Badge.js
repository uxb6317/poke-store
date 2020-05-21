import React from 'react';
import { Text } from '@chakra-ui/core';

const Badge = ({ text, color }) => {
  return (
    <Text
      borderRadius='md'
      px={2}
      py='px'
      color={color && 'white'}
      bg={color ? color : 'gray.200'}
      textTransform='capitalize'
    >
      {text}
    </Text>
  );
};

export default Badge;
