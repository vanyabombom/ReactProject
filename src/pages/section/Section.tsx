import { useParams } from "react-router-dom";
import './ui/Section.css';
import { useEffect, useState, useMemo } from "react";
import type { SectionType } from "../../entities/section/model/SectionType";
import SectionDao from "../../entities/section/api/SectionDao";
import ProductCard from "../../entities/product/ui/ProductCard";
import ProductDao from "../../entities/product/api/ProductDao";

export default function Section() {
    const { slug } = useParams<string>();
    const [pageData, setPageData] = useState<SectionType | null>(null);
    const [filterState, setFilterState] = useState(ProductDao.filters);

    useEffect(() => {
        if (typeof (slug) != 'undefined') {
            SectionDao.getSection(slug).then(setPageData);
        }
    }, [slug]);

    const filteredProducts = useMemo(() => {
        if (!pageData) return [];
        return ProductDao.applyFilters(pageData.products);
    }, [pageData, filterState]);

    const handleFilterChange = (key: keyof typeof filterState, value: any) => {
        ProductDao.filters = { ...ProductDao.filters, [key]: value };
        setFilterState({ ...ProductDao.filters });
    };

    return <>
        <div className="section-header">
            <div className="filters-bar glass-panel">
                <input
                    type="text"
                    placeholder="Пошук..."
                    className="form-control"
                    value={filterState.search}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                />
                <div className="price-filters">
                    <input
                        type="number"
                        placeholder="Мін. ціна"
                        className="form-control"
                        value={filterState.minPrice || ''}
                        onChange={(e) => handleFilterChange('minPrice', Number(e.target.value))}
                    />
                    <input
                        type="number"
                        placeholder="Макс. ціна"
                        className="form-control"
                        value={filterState.maxPrice || ''}
                        onChange={(e) => handleFilterChange('maxPrice', Number(e.target.value))}
                    />
                </div>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={filterState.inStockOnly}
                        onChange={(e) => handleFilterChange('inStockOnly', e.target.checked)}
                    />
                    В наявності
                </label>
            </div>
        </div>

        <div className="products-container">
            {filteredProducts.map(product => <ProductCard product={product} key={product.id} />)}
            {filteredProducts.length === 0 && <p className="no-products">Нічого не знайдено за вашим запитом</p>}
        </div>
    </>;
}