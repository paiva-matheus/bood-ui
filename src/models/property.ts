export type Property = {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
};

export class PropertyDto {
  constructor(
    public props: {
      id: string;
      title: string;
      description: string;
      price: number;
      imageUrl: string;
    }
  ) {}

  get id() {
    return this.props.id;
  }

  get title() {
    return this.props.title;
  }

  get description() {
    return this.props.description;
  }

  get imageUrl() {
    return this.props.imageUrl;
  }

  get price() {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(this.props.price);
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      imageUrl: this.imageUrl,
      price: this.price,
    };
  }
}
