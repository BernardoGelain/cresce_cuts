import { BrowserRouter, Routes as RRDRouter, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import BulkDiscount from "@/pages/BulkDiscount/BulkDiscount";

export default function Routes() {
  return (
    <BrowserRouter>
      <RRDRouter>
        <Route path="/" element={<Home />} />
        <Route path="/discount" element={<BulkDiscount />} />
      </RRDRouter>
    </BrowserRouter>
  );
}
