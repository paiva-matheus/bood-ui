import * as React from 'react';
import { List as MUIList } from '@mui/material';
import { Property } from '@/properties/dto/property.dto';
import { Card } from '@/components/Card';

export const List = ({ properties }: { properties: Property[] }) => {
  return (
    <MUIList
      sx={{
        width: '100%',
        maxWidth: '80rem',
        bgcolor: 'background.paper',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 4,
        margin: '2rem 0',
      }}
    >
      {properties.map((property) => (
        <Card key={property.id} property={property} />
      ))}
    </MUIList>
  );
};
