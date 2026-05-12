import * as React from 'react';

interface Props {
    title?: string;
    subtitle?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
    footer?: React.ReactNode;
    timeline?: boolean;
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
}

export function Card(props: Props) {
    const classes = ['card', props.className, props.onClick ? 'card-clickable' : '']
        .filter(Boolean)
        .join(' ');

    const card = (
        <div className={classes} onClick={props.onClick}>
            {props.image && (
                <img className="card-image" src={props.image} alt={props.imageAlt ?? props.title ?? ''} />
            )}
            {(props.title || props.subtitle) && (
                <div className="card-header">
                    {props.title && <h1 className="card-title">{props.title}</h1>}
                    {props.subtitle && <p className="card-subtitle">{props.subtitle}</p>}
                </div>
            )}
            {props.description && <p className="card-description">{props.description}</p>}
            {props.children && <div className="card-body">{props.children}</div>}
            {props.footer && <div className="card-footer">{props.footer}</div>}
        </div>
    );

    if (props.timeline) {
        return (
            <div className="timeline-item">
                <div className="timeline-node" />
                {card}
            </div>
        );
    }

    return card;
}