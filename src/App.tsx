import { useState } from 'react';
import './App.css'
import { Footer } from "./components/Footer.tsx";
import { Navbar } from "./components/Navbar.tsx";
import { AboutPage } from "./pages/AboutPage.tsx";
import { HomePage } from "./pages/HomePage.tsx";

function App() {
    const [page, setPage] = useState<'home' | 'about'>('home');

    return (
        <>
            <Navbar onNavigate={setPage} />
            <article>
                <div key={page} className="anim-fade">
                    {page === 'about' ? <AboutPage /> : <HomePage />}
                </div>
            </article>
            <Footer />
        </>
    );
}

export default App
