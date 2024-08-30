import * as React from 'react';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

export function Skeleto() {
  return (
    <Grid
      container
      sx={{
        flexWrap: 'wrap',
        gap: '1.5rem',
        justifyContent: 'center',
        marginTop: '2.5rem',
      }}
    >
      <Skeleton variant='rectangular' width={335} height={300} />
      <Skeleton variant='rectangular' width={335} height={300} />
      <Skeleton variant='rectangular' width={335} height={300} />
      <Skeleton variant='rectangular' width={335} height={300} />
      <Skeleton variant='rectangular' width={335} height={300} />
    </Grid>
  );
}
