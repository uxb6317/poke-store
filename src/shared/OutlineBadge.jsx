import React from 'react';
import { Text } from '@chakra-ui/core';

const OutlineBadge = ({ text, color }) => {
  return (
    <Text
      borderRadius='md'
      px={3}
      py='px'
      border='1px'
      borderColor={color ? color : 'gray.500'}
      color={color ? color : 'gray.500'}
      fontWeight='semibold'
      textTransform='capitalize'
    >
      {text}
    </Text>
  );
};

export default OutlineBadge;
