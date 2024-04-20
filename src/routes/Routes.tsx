import { BrowserRouter, Routes as RRDRouter, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import BulkDiscount from "@/pages/BulkDiscount/BulkDiscount";
import PercentDiscount from "@/pages/PercentDiscount/PercentDiscount";
import FixedDiscount from "@/pages/FixedDiscount/FixedDiscount";

export default function Routes() {
  return (
    <BrowserRouter>
      <RRDRouter>
        <Route path="/" element={<Home />} />
        <Route path="/bulk" element={<BulkDiscount />} />
        <Route path="/percent" element={<PercentDiscount />} />
        <Route path="/fixed" element={<FixedDiscount />} />
      </RRDRouter>
    </BrowserRouter>
  );
}
