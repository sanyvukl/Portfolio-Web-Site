import { Link } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryPreviewContainer, Preview } from "./category-preview.style";

const CategoryPreview = ({ title, products }) => {

    return (
        <CategoryPreviewContainer key={title}>
            <h2>
                <Link to={title}>
                    {title.toUpperCase()}
                </Link>
            </h2>
            <Preview>
                {products.slice(0, 4).map((product) => {
                    return <ProductCard key={product.id} product={product} />
                })};
            </Preview>
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;