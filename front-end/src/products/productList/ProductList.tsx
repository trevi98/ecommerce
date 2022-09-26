import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { Product } from "../product";

export default function ProductList() {
  const { data } = useQuery(
    ["products"],
    async () => (await axios.get<Product[]>("/products")).data
  );
  return data ? (
    <ul>
      {data.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  ) : (
    <ClipLoader />
  );
}
