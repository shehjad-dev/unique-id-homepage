import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import UseCaseSection from "./components/UseCaseSection";
import Footer from "./components/Footer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <NavBar />
            <HeroSection />
            <UseCaseSection />
            <Footer />
        </>
    );
}

export default App;
