import { Property, PropertyDto } from '@/properties/dto/property.dto';
import BaseAPI from '@/services/base-api';
import { Pagination } from '@/types/pagination.types';

type ListAllParams = SortParams | Pagination;

type ListAllResponse = {
  properties: Property[];
  pagination?: Pagination;
  isSuccess: boolean;
  error?: any;
};

type GetByIdResponse = {
  property?: Property;
  isSuccess: boolean;
  error?: any;
};

export class PropertiesService extends BaseAPI {
  async listAll(params: ListAllParams): Promise<ListAllResponse> {
    try {
      const response = await this.http
        .get(`/properties`, {
          params: params,
        })
        .then((response) => response.data);

      const pagination = response.pagination;
      const properties = response.data.map((property: any) =>
        new PropertyDto({
          id: property.id,
          title: property.title,
          description: property.description,
          imageUrl: property.imageUrl,
          price: property.price,
          features: property.features,
        }).toJSON()
      );

      return { properties, pagination, isSuccess: true };
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
      features: data.features,
    }).toJSON();

    return { property, isSuccess: true };
  }
}
