import { propertyFixture } from './fixtures/property';
import { api } from '@/services/axios';
import { PropertiesService } from '@/services/properties-service';
import { faker } from '@faker-js/faker';

const mockGet = jest.spyOn(api, 'get');
const service = new PropertiesService(api);

describe('listAll', () => {
  test('returns success response with properties', async () => {
    const mockProperties = [propertyFixture(), propertyFixture()];
    const expectedProperties = mockProperties.map((property) => ({
      ...property,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(property.price),
    }));

    const mockedResponse = {
      status: 200,
      data: { data: mockProperties },
      statusText: 'OK',
      headers: {},
      config: {},
    };

    mockGet.mockResolvedValueOnce(mockedResponse);
    const { isSuccess, properties } = await service.listAll();

    expect(isSuccess).toEqual(true);
    expect(properties).toEqual(expectedProperties);
    expect(mockGet).toHaveBeenCalledWith('/properties');
  });
});

describe('getById', () => {
  test('returns success response with property', async () => {
    const mockProperty = propertyFixture();
    const expectedProperty = {
      ...mockProperty,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(mockProperty.price),
    };

    const mockedResponse = {
      status: 200,
      data: { data: mockProperty },
      statusText: 'OK',
      headers: {},
      config: {},
    };

    mockGet.mockResolvedValueOnce(mockedResponse);
    const { isSuccess, property } = await service.getById(mockProperty.id);

    expect(isSuccess).toEqual(true);
    expect(property).toEqual(expectedProperty);
    expect(mockGet).toHaveBeenCalledWith(`/properties/${mockProperty.id}`);
  });

  test('returns an error when property not found', async () => {
    const apiError = { message: 'Property Not Found' };
    const mockedErrorResponse = {
      data: apiError,
      status: 404,
      statusText: 'Not Found',
      headers: {},
      config: {},
    };

    mockGet.mockResolvedValueOnce(mockedErrorResponse);
    const fakeUUID = faker.string.uuid();
    const response = await service.getById(fakeUUID);

    expect(response.isSuccess).toEqual(false);
    expect(response.error).toEqual(apiError);
    expect(mockGet).toHaveBeenCalledWith(`/properties/${fakeUUID}`);
  });
});
