import { faker } from '@faker-js/faker';

export const propertyFixture = (attrs: Partial<any> = {}): any => {
  const defaults: any = {
    id: faker.string.uuid(),
    title: faker.lorem.words(),
    imageUrl: faker.image.url(),
    description: faker.lorem.paragraphs,
    price: faker.number.int({ min: 250000, max: 2000000 }),
  };

  return { ...defaults, ...attrs };
};
