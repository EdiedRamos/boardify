export interface ResponseI {
  pageable: PageableI;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: SortI;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface PageableI {
  pageNumber: number;
  pageSize: number;
  sort: SortI;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface SortI {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
