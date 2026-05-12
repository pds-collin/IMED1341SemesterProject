interface Props {
    onNavigate: (page: 'home' | 'about') => void;
}

export function Navbar({ onNavigate }: Props) {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <button onClick={() => onNavigate('home')}>Home</button>
                <button onClick={() => onNavigate('about')}>About the Author</button>
            </div>
        </nav>
    );
}