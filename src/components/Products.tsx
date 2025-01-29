"use client";

import { Product } from "@/types/Product";
import { useEffect, useState } from "react";

const Products = () => {
    const [data, setData] = useState<Product[]>([]);
    useEffect(() => {
        (async () => {
            const data = await fetch("http://localhost:3000/api/users");
            const products = await data.json();
            setData(products.items);
        })();
    }, []);

    return <div className="bg-primary">test</div>;
};

export default Products;
