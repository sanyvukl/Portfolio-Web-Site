import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-previev/categories-preview.component";
import Category from "../../components/category/category.component";

const Shop = () => {
    return (
        <Routes>
            <Route index={true} element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
};

export default Shop;
