import { Property } from '@/properties/dto/property.dto';
import {
  PropertyViewContent,
  PropertyViewDescription,
  PropertyViewPrice,
  PropertyViewTextContainer,
  PropertyViewTitle,
} from './styles';
import Image from 'next/image';
import { List, ListItem, ListItemText } from '@mui/material';

type PropertyViewProps = {
  property: Property;
};

export const PropertyView = ({ property }: PropertyViewProps) => {
  return (
    <PropertyViewContent>
      <Image
        src={property.imageUrl}
        alt={`Foto do imóvel: ${property.title}`}
        width={350}
        height={250}
      />

      <PropertyViewTextContainer>
        <PropertyViewTitle>{property.title}</PropertyViewTitle>
        <PropertyViewDescription>
          {property.description}
        </PropertyViewDescription>
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
          }}
          aria-label='contacts'
        >
          {property.features.map((feature: string) => (
            <ListItem
              disablePadding
              key={`${property.id}-${feature}`}
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
      </PropertyViewTextContainer>
      <PropertyViewPrice>{property.formattedPrice}</PropertyViewPrice>
    </PropertyViewContent>
  );
};
