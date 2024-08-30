import { faker } from '@faker-js/faker';

export const proposalFixture = (attrs: Partial<any> = {}): any => {
  const defaults: any = {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    observation: faker.lorem.paragraphs,
    propertyId: faker.string.uuid(),
  };

  return { ...defaults, ...attrs };
};
