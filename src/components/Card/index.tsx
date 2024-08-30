import * as React from 'react';
import { useRouter } from 'next/navigation';
import { List, ListItem, ListItemText, Card as MUICard } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Property } from '@/properties/dto/property.dto';
import { Price } from './styles';

const CardSX = {
  '&:hover': {
    boxShadow: '4px 4px 8px 4px #88b6de',
  },
  maxWidth: 335,
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
};

export const Card = ({ property }: { property: Property }) => {
  const { id, title, description, imageUrl, formattedPrice, features } =
    property;
  const router = useRouter();

  const onClick = () => {
    router.push(`/properties/${id}`, { scroll: false });
  };

  return (
    <MUICard sx={CardSX} component='li' onClick={onClick}>
      <CardMedia
        sx={{ height: 160 }}
        image={imageUrl}
        title={`Imagem do imóvel: ${title}`}
        component='img'
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='h4'
          component='h3'
          sx={{ fontWeight: '700', color: 'var(--dark-blue)' }}
        >
          {title}
        </Typography>
        <Typography
          variant='body2'
          sx={{ color: 'var(--text-color)', fontSize: '1rem' }}
        >
          {description}
        </Typography>
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
          }}
          aria-label='contacts'
        >
          {features.map((feature: string) => (
            <ListItem
              disablePadding
              key={`${id}-${feature}`}
              sx={{
                listStyleType: 'disc',
                display: 'list-item',
                marginLeft: '1rem',
              }}
            >
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Price>Valor de venda: {formattedPrice}</Price>
    </MUICard>
  );
};
