import type ProductPageType from "../model/ProductPageType";
const p1 = {
    id: "1",
    name: "Apple iPhone 5",
    slug: "apple-iphone-5",
    price: 3, discount: 1, rating: 5,
    imageUrl: "/img/iphone5.png",
    stock: 10
};
const p3 = {
    id: "814897", name: "Apple iPhone 16 Pro Max",
    slug: "apple-iphone-16-pro-max",
    price: 67999, discount: 2800, rating: 5,
    imageUrl: "/img/iphone-16-promax.png",
    stock: 0
};
const p4 = {
    id: "842447", name: "MacBook Air 13",
    slug: "macbook-air-13",
    price: 41999, discount: 8000, rating: 1,
    imageUrl: "/img/midnight-1-1397x1397.png",
    stock: 10
};
const p5 = {
    id: "855417", name: "Apple iPhone 17 Pro Max ",
    slug: "apple-iphone-17-pro-max",
    price: 83699, discount: 13050, rating: 3,
    imageUrl: "/img/deepBlue-_4_-1397x1397.png-removebg-preview.png",
    stock: 3
};
const p6 = {
    id: "842247", name: "Apple iPad 11 ",
    slug: "apple-ipad-11",
    price: 17199, discount: 1300, rating: 5,
    imageUrl: "/img/ipad-2022-hero-silver-wifi-selec-1397x1397.jpg-removebg-preview.png",
    stock: 10
};
const p7 = {
    id: "855418", name: "Apple iPhone 17 Pro Max 256GB (Cosmic Orange)",
    slug: "apple-iphone-17-pro-max-256gb-cosmic-orange",
    price: 83699, discount: 13050, rating: 5,
    imageUrl: "/img/CosmicOrange-1397x1397.png.webp",
    stock: 5
};
export const allProducts = [p1, p3, p4, p5, p6, p7];


export interface ProductFilters {
    search: string;
    minPrice: number;
    maxPrice: number;
    inStockOnly: boolean;
}

export default class ProductDao {
    static filters: ProductFilters = {
        search: '',
        minPrice: 0,
        maxPrice: 1000000,
        inStockOnly: false
    };

    static applyFilters(products: Array<any>, filters: ProductFilters = ProductDao.filters): Array<any> {
        return products.filter(p => {
            const matchesSearch = p.name.toLowerCase().includes(filters.search.toLowerCase());
            const matchesMinPrice = p.price >= filters.minPrice;
            const matchesMaxPrice = p.price <= filters.maxPrice;
            const matchesStock = filters.inStockOnly ? (p.stock ?? 1) > 0 : true;
            return matchesSearch && matchesMinPrice && matchesMaxPrice && matchesStock;
        });
    }

    static getProduct(slugOrId: string): Promise<ProductPageType> {
        return new Promise(async (resolve, _) => {
            setTimeout(async () => {
                const allProducts = [p1, p3, p4, p5, p6, p7];
                const p = allProducts.find(p => p.slug == slugOrId || p.id == slugOrId);

                if (p) {
                    resolve({
                        product: p,
                        recommended: allProducts.filter(x => x.id != p.id)
                    });
                } else {
                    const namePart = slugOrId.split('-product-')[0] || "Невідомо";


                    const { default: SectionDao } = await import('../../section/api/SectionDao');
                    const sections = await SectionDao.getSections();
                    const section = sections.find(s => s.slug === namePart);
                    const placeholderImg = section?.imageUrl || "/img/wide-applefull.png.webp";

                    const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);

                    const dynamicProduct = {
                        id: slugOrId,
                        name: `${formattedName} Товар`,
                        slug: slugOrId,
                        price: 9999,
                        discount: 0,
                        rating: 5,
                        imageUrl: placeholderImg,
                        stock: 10
                    };

                    resolve({
                        product: dynamicProduct,
                        recommended: allProducts.slice(0, 4)
                    });
                }
            }, 700);
        });
    }
}