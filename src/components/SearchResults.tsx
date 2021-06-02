import { ProductItem } from "./ProductItem";

type SearchResultsProps = {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>
}

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {
        results.map((result, index) => (
          <ProductItem key={index} product={result} />
        ))
      }
    </div>
  );
}