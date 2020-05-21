import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import { Box } from '@chakra-ui/core';

const PokemonStats = ({ stats }) => {
  const data = stats.map(({ base_stat, stat: { name } }) => {
    return { name, stat: base_stat };
  });

  return (
    <Box w='full' h='2xs'>
      <ResponsiveContainer>
        <BarChart
          data={data}
          layout='vertical'
          margin={{ top: 5, right: 30, left: 57, bottom: 5 }}
          barSize={20}
        >
          <XAxis type='number' />
          <YAxis type='category' dataKey='name' />
          <Bar dataKey='stat' label={{ position: 'right' }}>
            {data.map((entry, index) => {
              const low = 50;
              const medium = 100;
              const colors = {
                low: '#F56565',
                medium: '#ECC94B',
                high: '#48BB78',
              };
              let color = colors.medium;
              if (entry.stat <= low) {
                color = colors.low;
              } else if (entry.stat >= medium) {
                color = colors.high;
              }
              return <Cell key={`cell-${index}`} fill={color} />;
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default PokemonStats;
