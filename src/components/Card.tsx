import * as React from 'react';

interface Props {
    title?: string;
    description?: string;
    image?: string;
    children?: React.ReactNode;
}

export function Card(props: Props) {
    return <div>
        { props.title ?? <h1>{props.title}</h1> }
        { props.children ?? null }
    </div>;
}