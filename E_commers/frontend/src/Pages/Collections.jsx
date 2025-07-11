import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { assets } from "../assets/assets/frontend_assets/assets";

const Collections = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [showfilter, setShowFilter] = React.useState(false);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [subCategory, setSubCategory] = React.useState([]);
  const [sortType, setSortType] = React.useState("relavent");

  const togglecategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubcategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilters = () => {
    let productsCpoy = products.slice();
    if (showSearch && search) {
      productsCpoy = productsCpoy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCpoy = productsCpoy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCpoy = productsCpoy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilteredProducts(productsCpoy);
  };

  const sortProduct = () => {
    let fpCopy = filteredProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilteredProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilteredProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilters();
        break;
    }
  };

  useEffect(() => {
    // Assuming products is an array of product objects
    applyFilters();
  }, [category, subCategory, search, showSearch,products]);

  useEffect(() => {
    // Sort products whenever sortType changes
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-10 pt-10 border-t">
      {/* filter Options */}

      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showfilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          <img
            className={`h-3 sm:hidden  ${showfilter ? "rotate-90" : ""}`}
            src= {assets.filter}
            alt=""
          />{" "}
          FILTERS
        </p>

        {/* Category */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showfilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                onChange={togglecategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onChange={togglecategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Kids"}
                onChange={togglecategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>
        {/* SubCategory filter  */}
        <div
          className={`border border-gray-300 pl-5 py-3  my-5 ${
            showfilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubcategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubcategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubcategory}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* right side  */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />

          {/* PRoduct sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relavent">Sort by:Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by : High to Low</option>
          </select>
        </div>
        {/* Map Products */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
