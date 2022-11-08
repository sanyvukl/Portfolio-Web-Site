import { Link } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import "./category-preview.style.scss";

const CategoryPreview = ({ title, products }) => {
    // const navigate = useNavigate();
    // const categoryClickHandler = (route) => navigate(`/shop/${route}`);

    return (
        <div className="category-preview-container" key={title}>
            <h2>
                <Link to={title} className="title">
                    {title.toUpperCase()}
                </Link>
            </h2>
            <div className="preview">
                {products.slice(0, 4).map((product) => {
                    return <ProductCard key={product.id} product={product} />
                })};
            </div>
        </div>
    );
};

export default CategoryPreview;