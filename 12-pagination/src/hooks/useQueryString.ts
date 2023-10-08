import { useSearchParams } from "react-router-dom";

export default function useQueryString() {
  const [searchParams] = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());
  return query;
}
