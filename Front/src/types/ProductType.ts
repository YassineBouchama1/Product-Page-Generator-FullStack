interface PaginationResult {
  currentPage: number;
  limit: number;
  numberOfPages: number;
}

export interface Product {
  _id: string;
  title: string;
  user: string;
  slug: string;
  description: string;
  seo: string;
  quantity: number;
  sold: number;
  price: number;

  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface ApiResponse {
  results: number;
  paginationResult: PaginationResult;
  data: Product[];
}

export interface CastError {
    stringValue: string;
    valueType: string;
    kind: string;
    value: string;
    path: string;
    reason: Record<string, unknown>;
    name: string;
    message: string;
}

export interface ErrorResponse {
    status: string;
    error: CastError;
}