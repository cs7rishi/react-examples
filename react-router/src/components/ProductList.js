import { useSearchParams, useLocation } from "react-router-dom"
export const ProductList = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  console.log(location);
  // console.log(searchParams.get("name"));
  return (
    <div className="component">ProductList</div>
  )
}
