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
                        "imageUrl": "/img/iphone.png",
                        "title": "iPhone",
                        "slug": "iphonefull"
                    },
                    {
                        "imageUrl": "/img/apple_products.png",
                        "title": "б/у Apple",
                        "slug": "applebw"
                    },
                    {
                        "imageUrl": "/img/google-pixel.png",
                        "title": "Смартфони",
                        "slug": "android"
                    },
                    {
                        "imageUrl": "/img/dyson.webp",
                        "title": "Dyson",
                        "slug": "dysonfull"
                    },
                    {
                        "imageUrl": "/img/watches.png",
                        "title": "Garmin",
                        "slug": "garminfull"
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
                        "imageUrl": "/img/keyboard_and_mouse.png",
                        "title": "Клавіатури та миші",
                        "slug": "micefull"
                    },
                    {
                        "imageUrl": "/img/accessories.png",
                        "title": "Аксесуари",
                        "slug": "acsfull"
                    },
                    {
                        "imageUrl": "/img/headphones.webp",
                        "title": "Навушники",
                        "slug": "headphonesfull"
                    },
                    {
                        "imageUrl": "/img/consoles.webp",
                        "title": "Консоли",
                        "slug": "consoles"
                    },
                    {
                        "imageUrl": "/img/laptops.avif",
                        "title": "Ноутбуки",
                        "slug": "laptops"
                    },
                    {
                        "imageUrl": "/img/TV.webp",
                        "title": "Телевизори",
                        "slug": "tvs"
                    },
                    {
                        "imageUrl": "/img/action_camera.png",
                        "title": "Экшн камеры",
                        "slug": "action-cameras"
                    },
                    {
                        "imageUrl": "/img/camera.webp",
                        "title": "Фотоапарати",
                        "slug": "cameras"
                    },
                    {
                        "imageUrl": "/img/monitor.png",
                        "title": "Мониторы",
                        "slug": "monitors"
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
            setTimeout(() => {
                // Return dummy products for any valid slug

                if (slug === 'apple') {
                    resolve({
                        products: [
                            {
                                id: "1", name: "Apple iPhone 17 Pro Max 256GB (Cosmic Orange)",
                                slug: "apple-iphone-17-pro-max-256gb-orange",
                                price: 73499, discount: 6050, rating: 2,
                                imageUrl: "/img/CosmicOrange-1397x1397.png.webp"
                            },
                            {
                                id: "2", name: "Навушники Apple AirPods Pro 3 (MFHP4) (2025)",
                                slug: "navushnyky-apple-airpods-pro-3",
                                price: 11899, discount: 2200, rating: 4,
                                imageUrl: "/img/airpods.png"
                            },
                            {
                                id: "814897", name: "Apple iPhone 15 256GB (Pink)",
                                slug: "apple-iphone-15-256gb--pink-",
                                price: 37999, discount: 2800, rating: 3,
                                imageUrl: "/img/pink (1)-1397x1397.jpeg.webp",
                                stock: 0
                            },
                        ]
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