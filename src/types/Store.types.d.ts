export interface CreateStore {
  name: string;
  description: string;
  imageUrl: string[];
  scope: number;
  review: string;
  minPrice: number;
  maxPrice: number;
  keywordList: string[];
}