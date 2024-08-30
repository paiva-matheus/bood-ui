import { capitalizeFirstLetter, formatPrice } from '@/utils/formatter';

export type Property = {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  features: string[];
  formattedPrice: string;
};

export class PropertyDto {
  constructor(
    public props: {
      id: string;
      title: string;
      description: string;
      price: number;
      imageUrl: string;
      features: string[];
    }
  ) {}

  get id() {
    return this.props.id;
  }

  get title() {
    return capitalizeFirstLetter(this.props.title);
  }

  get description() {
    return capitalizeFirstLetter(this.props.description);
  }

  get imageUrl() {
    return this.props.imageUrl;
  }

  get price() {
    return this.props.price;
  }

  get features() {
    return this.props.features.map((feat) => capitalizeFirstLetter(feat));
  }

  get formattedPrice() {
    return formatPrice(this.props.price);
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      imageUrl: this.imageUrl,
      price: this.price,
      features: this.features,
      formattedPrice: this.formattedPrice,
    };
  }
}
