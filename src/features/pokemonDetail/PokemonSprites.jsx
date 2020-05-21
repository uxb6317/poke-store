import React, { useState } from 'react';
import { Flex, Box, Image, Icon } from '@chakra-ui/core';

const PokemonSprites = ({ sprites }) => {
  const [selectedSprite, setSelectedSprite] = useState(sprites.front_default);
  const [isShiny, setIsShiny] = useState(false);

  const handleShinyClick = () => {
    let src = selectedSprite;
    const direction = getFacingDirection(selectedSprite);
    if (isShiny) {
      src = sprites[`${direction}_default`];
      setIsShiny(false);
    } else {
      src = sprites[`${direction}_shiny`];
      setIsShiny(true);
    }
    setSelectedSprite(src);
  };

  const handleSpriteClick = (selectedSprite) => {
    const direction = getFacingDirection(selectedSprite);

    if (isShiny) {
      setSelectedSprite(sprites[`${direction}_shiny`]);
    } else {
      setSelectedSprite(selectedSprite);
    }
  };

  const getFacingDirection = (src) => {
    if (src.includes('back')) {
      return 'back';
    } else {
      return 'front';
    }
  };

  return (
    <Flex
      style={{
        '-moz-user-select': 'none',
        '-webkit-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none',
      }}
      flexDirection={{ base: 'column' }}
    >
      <Box pos='relative' maxW='sm' w={{ base: 'full' }}>
        <Image minW={{ sm: 'xs' }} w='full' src={selectedSprite} />
        <Flex
          pos='absolute'
          border='2px'
          borderColor='yellow.400'
          borderRadius='full'
          top='0'
          right='0'
          mt={6}
          mr={6}
          cursor='pointer'
          w={10}
          h={10}
          align='center'
          justify='center'
          onClick={handleShinyClick}
          transition='all .1s'
          bg={isShiny ? 'gray.700' : 'gray.50'}
          style={{
            filter: isShiny && 'drop-shadow(0 0 .5rem #d69e2e)',
          }}
        >
          <Icon name='star' size={5} color='yellow.400' />
        </Flex>
      </Box>
      <Flex p={1}>
        <Image
          transition='all .1s'
          minW={20}
          p={1}
          onClick={() => handleSpriteClick(sprites.front_default)}
          bg={
            getFacingDirection(selectedSprite) === 'front'
              ? 'gray.200'
              : 'transparent'
          }
          borderRadius='md'
          objectFit='contain'
          src={sprites.front_default}
          cursor='pointer'
        />
        <Image
          transition='all .2s'
          minW={20}
          p={1}
          onClick={() => handleSpriteClick(sprites.back_default)}
          bg={
            getFacingDirection(selectedSprite) === 'back'
              ? 'gray.200'
              : 'transparent'
          }
          borderRadius='md'
          objectFit='contain'
          src={sprites.back_default}
          cursor='pointer'
        />
      </Flex>
    </Flex>
  );
};

export default PokemonSprites;
