import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
} from 'recharts';
import { Container } from './styles'

const PokemonRadarChart = ({data, type}) => {
  return (
    <Container>
      <ResponsiveContainer>
        <RadarChart
          cx={180}
          data={data}
          stroke="var(--grayscale-2)"
          fill={`var(--${type})`}
        >
          <PolarGrid stroke="var(--grayscale-2)" />
          <PolarAngleAxis dataKey="stat.name" />
          <PolarRadiusAxis stroke="var(--grayscale-2)"/>
          <Radar
            dataKey="base_stat"
            stroke={`var(--${type})`}
            fill={`var(--${type})`}
            fillOpacity={.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default  PokemonRadarChart