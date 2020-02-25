import React, { useState } from 'react';
import { Grid, Image } from '@chakra-ui/core';

const PokemonSprites = ({ sprites }) => {
  const [selectedSprite, setSelectedSprite] = useState(sprites.front_default);

  return (
    <>
      <Image
        src={selectedSprite}
        alt='Pokemon Sprite'
        objectFit='contain'
        width='100%'
        border='1px'
        borderColor='gray.40'
        mb={1}
      />
      <Grid gridTemplateColumns='repeat(3, 1fr)'>
        {Object.keys(sprites).map(key => {
          if (sprites[key]) {
            return (
              <Image
                onClick={() => setSelectedSprite(sprites[key])}
                key={key}
                src={sprites[key]}
                cursor='pointer'
                border='1px'
                borderColor={
                  selectedSprite === sprites[key] ? 'black' : 'white'
                }
              />
            );
          }
        })}
      </Grid>
    </>
  );
};

export default PokemonSprites;
