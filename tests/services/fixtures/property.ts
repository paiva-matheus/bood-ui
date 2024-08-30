import { capitalizeFirstLetter } from '@/utils/formatter';
import { faker } from '@faker-js/faker';

export const propertyFixture = (attrs: Partial<any> = {}): any => {
  const defaults: any = {
    id: faker.string.uuid(),
    title: capitalizeFirstLetter(faker.lorem.words()),
    imageUrl: faker.image.url(),
    description: capitalizeFirstLetter(faker.lorem.paragraphs()),
    price: faker.number.int({ min: 250000, max: 2000000 }),
    features: faker.helpers.arrayElements(['3 quartos', 'Garagem', 'Varanda']),
  };

  return { ...defaults, ...attrs };
};
