import { Category, Product } from "../../sanity.types";
import ProductGrid from "./ProductGrid";

interface ProductsViewProps {
  products: Product[];
  categories: Category[];
}

const ProductsView = ({ products }: ProductsViewProps) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      {/* Categories */}
      {/* <div className="w-full sm:w-[200px]">
        <CategorySelectorComponent categories={categories} />
      </div> */}

      {/* Products */}
      <div className="flex-1">
        <ProductGrid products={products} />
        <hr className="w-1/2 sm:w-3/4 mt-4" />
      </div>
    </div>
  );
};

export default ProductsView;

// import { Category, Product } from "../../sanity.types";
// import CategorySelectorComponent from "./CategorySelectorComponent";
// import ProductGrid from "./ProductGrid";



// interface ProductsViewProps {
//     products: Product[];
//     categories: Category[];
    
// }

// const ProductsView = ( { products, categories  }: ProductsViewProps ) => {
//     return (

//         <div className="flex flex-col">
//             {/* categories */}

//             <div className="w-full sm:w-[200px]">
//                 <CategorySelectorComponent categories={categories} />
//             </div>

//             {/* products */}

//             <div>
//                 <div className="flex-1">
//                     <ProductGrid products={products} />

//                     <hr className="w-1/2 sm:w-3/4" />
//                 </div>
//             </div>

//         </div>
//     );
// }
// export default ProductsView;