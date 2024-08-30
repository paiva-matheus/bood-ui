import { Property } from '@/properties/dto/property.dto';
import { api } from '@/services/axios';
import { PropertiesService } from '@/properties/services/properties.service';
import { useState } from 'react';
import { Pagination } from '@/types/pagination.types';

export const useProperties = (
  initialProperties: Property[],
  initialPagination: Pagination
) => {
  const [properties, setProperties] = useState(initialProperties);
  const [sort, setSort] = useState<SortParams>({
    sortBy: 'title',
    sortOrder: 'asc',
  });
  const [pagination, setPagination] = useState<Pagination>(initialPagination);
  const [isLoading, setIsLoading] = useState(false);
  const service = new PropertiesService(api);

  const handleSort = async (sortParams: SortParams) => {
    setIsLoading(true);
    const response = await service.listAll({
      ...sortParams,
      ...pagination,
      page: 1,
    });

    setSort(sortParams);
    setPagination({ ...pagination, page: 1 });
    setProperties(response.properties);
    setIsLoading(false);
  };

  const handlePaginate = async (page: number) => {
    setIsLoading(true);
    const response = await service.listAll({
      ...sort,
      ...pagination,
      page: page,
    });

    setPagination({ ...pagination, page: page });
    setProperties(response.properties);
    setIsLoading(false);
  };

  return {
    properties,
    handleSort,
    handlePaginate,
    pagination,
    isLoading,
  };
};
