import { useParams } from "react-router-dom";
import "./ui/Product.css";
import { useContext, useEffect, useState, useRef, type MouseEventHandler } from "react";
import ProductDao from "../../entities/product/api/ProductDao";
import { AppContext } from "../../features/app_context/AppContext";
import type ProductPageType from "../../entities/product/model/ProductPageType";
import ProductCard from "../../entities/product/ui/ProductCard";



export default function Product() {
    const { setBusy, isBusy, cart, setCart, showToast } = useContext(AppContext);
    const { slug } = useParams<string>();
    const [pageData, setPageData] = useState<ProductPageType | null>(null);

    const addToCart = () => {
        if (!pageData?.product) return;
        const product = pageData.product;

        let newCart = { ...cart, price: cart.price + product.price };
        let item = newCart.items.find(i => i.product.id == product.id);
        if (item) {
            item.cnt += 1;
            item.price += product.price;
        }
        else {
            newCart.items.push({
                product: product,
                price: product.price,
                cnt: 1
            });
        }
        setCart(newCart);
        showToast({ message: "Додано до кошику " + product.name });
    };

    useEffect(() => {
        if (slug) {
            setBusy(true);
            ProductDao
                .getProduct(slug)
                .then(setPageData)
                .catch(err => {
                    setPageData(null);
                    console.error(err);
                })
                .finally(() => setBusy(false));
        }
    }, [slug]);

    return pageData === undefined ? <h1>Завантаження...</h1>
        : isBusy ? <></>
            : pageData === null ? <h1>Не знайдено</h1>
                : <>
                    <div className="product-container">
                        <div className="product-image">
                            <img src={pageData?.product.imageUrl} alt={pageData?.product.name} />
                        </div>
                        <div className="product-info">
                            <h1 className="product-title">{pageData?.product.name}</h1>
                            <div className="product-status">
                                <div className='product-rating'>★★★★★ ({pageData.product.rating})</div>
                                {pageData.product.stock === 0
                                    ? <div className="product-stock stock-none">Передзамовлення</div>
                                    : pageData.product.stock && pageData.product.stock > 0 && pageData.product.stock < 5
                                        ? <div className="product-stock stock-low">Закінчується</div>
                                        : <div className="product-stock stock-available">В наявності</div>
                                }
                            </div>

                            <div className="price-block">
                                <div className="price-old">{pageData.product.price + (pageData?.product.discount ?? 0)} грн</div>
                                <div className="price-new">{pageData.product.price} грн</div>
                            </div>

                            <button className="btn btn-primary" style={{ width: 'fit-content' }} onClick={() => addToCart()}>
                                Купити <i className="bi bi-cart-plus ms-2"></i>
                            </button>
                        </div>
                    </div>

                    <Recommended pageData={pageData} />
                </>;
}

function Recommended({ pageData }: { pageData: ProductPageType }) {
    const scrollRightRef = useRef<HTMLDivElement>(null);

    const scrollRightClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();
        scrollRightRef.current?.scrollBy({
            left: 150,
            behavior: "smooth",
        });
    };
    const scrollLeftClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();
        scrollRightRef.current?.scrollBy({
            left: -150,
            behavior: "smooth",
        });
    };

    return <div className="recommended-box">

        <div className="recommended-container" ref={scrollRightRef}>
            <div className="recommended-row">
                {pageData?.recommended.map(product => <ProductCard product={product} key={product.id} />)}
            </div>
        </div>

        <div className="scroll-left" role="button" onClick={scrollLeftClick}>
            &lt;
        </div>
        <div className="scroll-right" role="button" onClick={scrollRightClick}>
            &gt;
        </div>
    </div>
        ;
}