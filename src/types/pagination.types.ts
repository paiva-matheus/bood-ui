export type PaginationParams = {
  page: number;
  pageSize: number;
};

export interface Pagination extends PaginationParams {
  totalRecords: number;
  totalPages: number;
}
