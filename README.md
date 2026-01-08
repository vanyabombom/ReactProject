# 4epuShop

Welcome to the 4epuShop, a cutting-edge e-commerce platform designed with a "Neo-Future" aesthetic. This project showcases a modern frontend architecture built with React 19 and TypeScript, featuring a sleek, light-themed UI with glassmorphism elements, dynamic product routing, and specialized features like a Trade-In calculator.

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Styling**: Native CSS with variables, Flexbox/Grid.

## ✨ Key Features

### 1. Basic White Themed UI
- **Aesthetic**: Clean whites, soft grays, and subtle accent colors.
- **Components**: Glassmorphism cards, neon-bordered buttons, and smooth hover animations.
- **Animations**: Integrated AOS (Animate On Scroll) for smooth scrolling entrance animations.
- **Global Styles**: Centralized CSS variables for consistent theming.

### 2. Product Catalog & Management
- **Browsing**: Filter products by price, category, and name.
- **Product Pages**: Dynamic routing (`/product/:slug`) with detailed views, image galleries, and recommendations.
- **Smart Recommendations**: Suggests related products based on the current selection.

### 3. Trade-In Calculator
- **Functionality**: Calculate the trade-in value of an old device against a new one.
- **Logic**: Includes validation to prevent downgrading (trading a more expensive device for a cheaper one).
- **UI**: Interactive selection with real-time price updates.

### 4. Services Section
- **Services Page**: Dedicated page listing available services like repairs and consultations.
- **Navigation**: Clean routing structure including Terms and Privacy pages.

## 🛠️ Installation & Usage

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd 4epuShop
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
src/
├── app/            # App-wide providers and setup
├── entities/       # Business entities (Product, Section)
│   ├── product/    # Product models, API, and UI cards
│   └── section/    # Section logic and parsing
├── features/       # Feature-based modules (Layout, Navigation)
├── pages/          # Route components (Home, Product, Services, Trade-In)
└── shared/         # Shared utilities and UI components
```

