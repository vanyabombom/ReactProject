import type { HomePageSection } from "../../../features/section_card/types/section";
import type { SectionType } from "../model/SectionType";

export default class SectionDao {
    static cacheSections: Array<HomePageSection> | undefined;

    static getSections() {
        return new Promise<Array<HomePageSection>>((resolve, _) => {
            if (typeof SectionDao.cacheSections != 'undefined') {
                resolve(SectionDao.cacheSections);
            }
            else setTimeout(() => {
                SectionDao.cacheSections = [
                    {
                        "imageUrl": "/img/iphone.png",
                        "title": "iPhone",
                        "slug": "iphone"
                    },
                    {
                        "imageUrl": "/img/google-pixel.png",
                        "title": "Смартфони",
                        "slug": "android"
                    },
                    {
                        "imageUrl": "/img/laptops.avif",
                        "title": "Ноутбуки",
                        "slug": "laptops"
                    },
                    {
                        "imageUrl": "/img/apple.png",
                        "title": "Apple",
                        "slug": "apple"
                    },
                    {
                        "imageUrl": "/img/airpods.png",
                        "title": "AirPods",
                        "slug": "airpods"
                    },
                    {
                        "imageUrl": "/img/consoles.webp",
                        "title": "Ігрові консолі",
                        "slug": "consoles"
                    },
                    {
                        "imageUrl": "/img/dyson.webp",
                        "title": "Dyson",
                        "slug": "dysonfull"
                    },
                    {
                        "imageUrl": "/img/TV.webp",
                        "title": "Телевізори",
                        "slug": "tvs"
                    },
                    {
                        "imageUrl": "/img/watches.png",
                        "title": "Смарт годинники",
                        "slug": "garminfull"
                    },
                    {
                        "imageUrl": "/img/apple_products.png",
                        "title": "Вживана техніка Apple",
                        "slug": "applebw"
                    },
                    {
                        "imageUrl": "/img/kitchen.png",
                        "title": "Техніка для кухні",
                        "slug": "kitchenfull"
                    },
                    {
                        "imageUrl": "/img/vacuum_cleaner.png",
                        "title": "Пилососи",
                        "slug": "home-carefull"
                    },
                    {
                        "imageUrl": "/img/headphones.webp",
                        "title": "Навушники",
                        "slug": "headphonesfull"
                    },
                    {
                        "imageUrl": "/img/camera.webp",
                        "title": "Фотоапарати",
                        "slug": "cameras"
                    },
                    {
                        "imageUrl": "/img/monitor.png",
                        "title": "Монітори",
                        "slug": "monitors"
                    },
                    {
                        "imageUrl": "/img/action_camera.png",
                        "title": "Екшн-камери",
                        "slug": "action-cameras"
                    },
                    {
                        "imageUrl": "/img/keyboard_and_mouse.png",
                        "title": "Клавіатури та миші",
                        "slug": "micefull"
                    },
                    {
                        "imageUrl": "/img/accessories.png",
                        "title": "Аксесуари",
                        "slug": "acsfull"
                    },
                ];
                resolve(SectionDao.cacheSections);
            }, 300);
        });
    }

    static async getSection(slug: string) {
        // Ensure sections are loaded to get the correct image
        const sections = await SectionDao.getSections();
        const currentSection = sections.find(s => s.slug === slug);
        const sectionImg = currentSection?.imageUrl || "/img/wide-applefull.png.webp";

        return new Promise<SectionType>((resolve, _) => {
            setTimeout(async () => {
                // Return dummy products for any valid slug

                if (slug === 'apple') {
                    // Use the single source of truth from ProductDao
                    const { allProducts } = await import('../../product/api/ProductDao');
                    resolve({
                        // For now, we return all products validation logic or filtering can be added here
                        // We are filtering for items that look like Apple products based on current mock data
                        products: allProducts
                    });
                    return;
                }

                if (slug === 'iphone') {
                    const { allProducts } = await import('../../product/api/ProductDao');
                    resolve({
                        products: allProducts.filter(p => p.name.toLowerCase().includes('iphone'))
                    });
                    return;
                }

                if (slug === 'kitchenfull') {
                    resolve({
                        products: [
                            { id: "k1", name: "Кавомашина DeLonghi Magnifica S", slug: "delonghi-magnifica-s", price: 15499, discount: 2000, rating: 5, imageUrl: sectionImg },
                            { id: "k2", name: "Мультипіч Philips Essential Airfryer", slug: "philips-airfryer", price: 4299, discount: 500, rating: 4, imageUrl: sectionImg },
                            { id: "k3", name: "Електрочайник Bosch Sky", slug: "bosch-sky-kettle", price: 1899, discount: 200, rating: 5, imageUrl: sectionImg },
                        ]
                    });
                    return;
                }

                if (slug === 'headphonesfull') {
                    resolve({
                        products: [
                            { id: "h1", name: "Sony WH-1000XM5 Black", slug: "sony-wh-1000xm5", price: 14999, discount: 1500, rating: 5, imageUrl: sectionImg },
                            { id: "h2", name: "Bose QuietComfort Headphones", slug: "bose-qc-headphones", price: 12499, discount: 1000, rating: 5, imageUrl: sectionImg },
                            { id: "h3", name: "Sennheiser Momentum 4 Wireless", slug: "sennheiser-m4", price: 13999, discount: 1200, rating: 4, imageUrl: sectionImg },
                        ]
                    });
                    return;
                }

                if (slug === 'acsfull') {
                    resolve({
                        products: [
                            { id: "a1", name: "Чохол Apple Silicone Case with MagSafe", slug: "apple-silicone-case", price: 2499, discount: 0, rating: 5, imageUrl: sectionImg },
                            { id: "a2", name: "Зарядний пристрій Apple 20W USB-C Power Adapter", slug: "apple-20w-adapter", price: 999, discount: 100, rating: 5, imageUrl: sectionImg },
                            { id: "a3", name: "Кабель Apple USB-C to Lightning (1m)", slug: "apple-lightning-cable", price: 899, discount: 0, rating: 4, imageUrl: sectionImg },
                        ]
                    });
                    return;
                }

                // Generate dummy products for other categories
                const dummyProducts = Array.from({ length: 6 }).map((_, i) => ({
                    id: `${slug}-${i}`,
                    name: `${slug.charAt(0).toUpperCase() + slug.slice(1)} Product ${i + 1}`,
                    slug: `${slug}-product-${i + 1}`,
                    price: 1000 * (i + 1),
                    discount: i % 2 === 0 ? 100 : 0,
                    rating: (i % 5) + 1,
                    imageUrl: sectionImg,
                    stock: 10
                }));

                resolve({ products: dummyProducts });

            }, 300);
        });
    }

}