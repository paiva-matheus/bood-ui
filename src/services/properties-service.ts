import { Property, PropertyDto } from '@/models/property';
import BaseAPI from '@/services/base-api';

type ListAllResponse = {
  properties: Property[] | [];
  isSuccess: boolean;
  error?: any;
};

type GetByIdResponse = {
  property?: Property;
  isSuccess: boolean;
  error?: any;
};

export class PropertiesService extends BaseAPI {
  async listAll(): Promise<ListAllResponse> {
    try {
      const properties = await this.http.get(`/properties`).then((res) => {
        return res.data.data.map((data: any) =>
          new PropertyDto({
            id: data.id,
            title: data.title,
            description: data.description,
            imageUrl: data.imageUrl,
            price: data.price,
          }).toJSON()
        );
      });

      return { properties, isSuccess: true };
    } catch (error: any) {
      return {
        properties: [],
        isSuccess: false,
        error: error.response?.data,
      };
    }
  }

  async getById(id: string): Promise<GetByIdResponse> {
    const response = await this.http
      .get(`/properties/${id}`)
      .then((res) => res);

    if (response.status === 404) {
      return {
        isSuccess: false,
        error: response?.data,
      };
    }

    const { data } = response.data;
    const property = new PropertyDto({
      id: data.id,
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
      price: data.price,
    }).toJSON();

    return { property, isSuccess: true };
  }
}
