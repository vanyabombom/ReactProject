import { useEffect, useState } from "react";

import type { HomePageSection } from "../../features/section_card/types/section";
import SectionCard from "../../features/section_card/SectionCard";
import "./ui/Home.css";
import SectionDao from "../../entities/section/api/SectionDao";

export default function Home() {
    const [homePageContent, setHomePageContent] = useState<HomePageContent | null>(null);

    useEffect(() => {
        SectionDao.getSections().then(s =>
            setHomePageContent({
                sections: s
            }));
    }, []);

    return <>
        <section className="hero-section">
            <h1 className="hero-title">Welcome to 4epuShop</h1>
            <p className="hero-subtitle">Discover premium products at the best prices. Trade-in your old devices or find repair services.</p>
        </section>

        <div className="content-container">
            {homePageContent?.sections.map(sec =>
                <SectionCard section={sec} key={sec.title} />)}
        </div>

    </>;
}

type HomePageContent = {
    sections: Array<HomePageSection>,
}
