import { useState, useEffect } from 'react';

export interface CollectionLink {
    label: string;
    href: string;
}

export interface CollectionItem {
    title: string;
    subtitle?: string;
    image?: string;
    imageAlt?: string;
    links?: CollectionLink[];
}

interface Props {
    items: CollectionItem[];
}

export function Collection({ items }: Props) {
    const [openMenu, setOpenMenu] = useState<number | null>(null);

    useEffect(() => {
        if (openMenu === null) return;
        const handler = () => setOpenMenu(null);
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [openMenu]);

    return (
        <div className="collection">
            {items.map((item, i) => (
                <div key={i} className="collection-item">
                    <div className="collection-item-avatar">
                        {item.image
                            ? <img src={item.image} alt={item.imageAlt ?? item.title} />
                            : <span>{item.title.charAt(0)}</span>
                        }
                    </div>
                    <div className="collection-item-text">
                        <span className="collection-item-title">{item.title}</span>
                        {item.subtitle && <span className="collection-item-subtitle">{item.subtitle}</span>}
                    </div>
                    {item.links?.length && (
                        <div className="collection-item-actions">
                            <button
                                className="collection-item-more"
                                aria-label="More options"
                                onMouseDown={(e) => e.stopPropagation()}
                                onClick={() => setOpenMenu(openMenu === i ? null : i)}
                            >
                                ⋮
                            </button>
                            {openMenu === i && (
                                <div className="collection-item-menu" onMouseDown={(e) => e.stopPropagation()}>
                                    {item.links.map((link, j) => (
                                        <a
                                            key={j}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="collection-item-menu-link"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}