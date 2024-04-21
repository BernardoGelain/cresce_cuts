import { BrowserRouter, Routes as RRDRouter, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Discount from "@/pages/Discount/Discount";

export default function Routes() {
  return (
    <BrowserRouter>
      <RRDRouter>
        <Route path="/" element={<Home />} />
        <Route path="/discount" element={<Discount />} />
      </RRDRouter>
    </BrowserRouter>
  );
}
