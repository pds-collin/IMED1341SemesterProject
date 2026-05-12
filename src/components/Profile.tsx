import * as React from 'react';

interface Props {
    image?: string;
    imageAlt?: string;
    name: string;
    title?: string;
    children?: React.ReactNode;
}

export function Profile({ image, imageAlt, name, title, children }: Props) {
    const initials = name.split(' ').map(w => w[0]).join('');

    return (
        <div className="profile">
            <div className="profile-image">
                {image
                    ? <img src={image} alt={imageAlt ?? name} />
                    : <span>{initials}</span>
                }
            </div>
            <div className="profile-info">
                <h1 className="profile-name">{name}</h1>
                {title && <p className="profile-title">{title}</p>}
                {children && <div className="profile-bio">{children}</div>}
            </div>
        </div>
    );
}