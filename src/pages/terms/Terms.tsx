import { useEffect } from "react";

export default function Terms() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <>
        <h1 className="display-4"><i className="bi bi-file-earmark-text"></i> Terms of Service</h1>
        <div className="terms-content" style={{ marginTop: '2rem' }}>
            <p>Last updated: January 2026</p>

            <h2>1. Agreement to Terms</h2>
            <p>By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.</p>

            <h2>2. Intellectual Property</h2>
            <p>The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights and other proprietary (including but not limited to intellectual property) rights.</p>

            <h2>3. Purchases</h2>
            <p>If you wish to purchase any product or service made available through the Service, you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p>

            <h2>4. Termination</h2>
            <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
        </div>
    </>;
}
