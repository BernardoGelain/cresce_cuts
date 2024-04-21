import { Discount } from "@/models/Discount";
import { useMemo } from "react";

type Filters = {
  type: string;
  status: string;
};
type Props = {
  discounts: Discount[];
  filters: Filters;
};

export const useFilteredData = ({ discounts, filters }: Props) => {
  const filteredData = useMemo(() => {
    let filteredData = discounts;
    if (filters.type !== "") {
      filteredData = filteredData.filter(
        (data: Discount) => data.type === filters.type
      );
    }
    if (filters.status !== "") {
      const status = filters.status === "1" ? true : false;
      filteredData = filteredData.filter(
        (data: Discount) => data.active === status
      );
    }
    return filteredData;
  }, [discounts, filters]);

  return filteredData;
};
