import { BrowserRouter, Routes as RRDRouter, Route } from "react-router-dom";
import Home from "../pages/home/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <RRDRouter>
        <Route path="/" element={<Home />} />
      </RRDRouter>
    </BrowserRouter>
  );
}
