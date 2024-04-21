import api from "@/config/axios";
import { Product } from "@/models/Product";
import { useCallback, useEffect, useState } from "react";

type Props = {
  id: number;
};

export const useFetchProduct = ({ id }: Props) => {
  const [product, setProduct] = useState<Product>();
  const [isFetching, setIsFetching] = useState(false);

  const fetchProduct = useCallback(() => {
    setIsFetching(true);

    api
      .get(`/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return {
    product,
    isFetching,
  };
};
