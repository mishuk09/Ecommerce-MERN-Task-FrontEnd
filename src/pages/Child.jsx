import Bestselling from "./Bestseeling/Bestselling";
import Categories from "./Categories/Categories";
import Flashsell from "./Flashsell/Flashsell";
import Home from "./Home";
import Subcategory from "./Subcategory/Subcategory";

const Child = () => {
    return (
        <div>
            <Home />
            <Flashsell />
            <Categories />
            <Bestselling />
            <Subcategory />
        </div>
    );
};

export default Child;