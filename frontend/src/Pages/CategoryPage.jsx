import React, { useEffect, useState } from "react";
import "./CSS/CategoryPage.css";
import Item from "../Components/Item/Item";
import { Link, useParams } from "react-router-dom";

const CategoryPage = () => {
    const { categoryName } = useParams();
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [selectedSize, setSelectedSize] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const sizes = ['All', 'Small', 'Medium', 'Large'];

    useEffect(() => {
        const fetchCategoryProducts = async () => {
            try {
                const res = await fetch(`http://localhost:5000/category/${categoryName}`);
                const data = await res.json();

                // Log and validate the data
                console.log("Fetched category data:", data);

                if (Array.isArray(data)) {
                    setAllProducts(data);
                } else {
                    setAllProducts([]); // fallback to prevent crash
                }
            } catch (err) {
                console.error("Failed to fetch category products:", err);
                setAllProducts([]); // fallback to prevent crash
            }
        };

        fetchCategoryProducts();
    }, [categoryName]);


    useEffect(() => {
        let updated = [...allProducts];

        if (selectedSize !== 'All') {
            updated = updated.filter(p => p.size === selectedSize);
        }

        if (searchQuery.trim() !== '') {
            updated = updated.filter(p =>
                p.name?.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        updated.sort((a, b) =>
            sortOrder === 'asc' ? a.new_price - b.new_price : b.new_price - a.new_price
        );

        setFilteredProducts(updated);
    }, [allProducts, sortOrder, selectedSize, searchQuery]);

    return (
        <div className="shopcategory1">
            <div className="shopcategory1-search">
                <input
                    type="text"
                    placeholder={`Search in ${categoryName}...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="shopcategory1-header">
                <div className="shopcategory1-filters">
                    <div className="shopcategory1-sort">
                        <label>Sort by</label>
                        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                            <option value="asc">Price: Low to High</option>
                            <option value="desc">Price: High to Low</option>
                        </select>
                    </div>

                    <div className="shopcategory1-filter">
                        <label>Filter by Size</label>
                        <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                            {sizes.map(size => (
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="shopcategory1-products">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item, i) => (
                            <Item
                                key={item.id || i}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        ))
                    ) : (
                        <p className="no-products1">No products found.</p>
                    )}
                </div>

            </div>

            <div className="shopcategory1-loadmore">
                <Link to="/" className="explore-link">Explore More</Link>
            </div>
        </div>
    );
};

export default CategoryPage;
