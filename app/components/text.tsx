type Props = {
    children: string;
    className?: string;
    type?: string;
};

export const TextEl = ({ children, className, type }: Props) => {
    switch (type) {
        case 'h1':
            return <h1 className={className}>{children}</h1>;
        case 'h2':
            return <h2 className={className}>{children}</h2>;
        case 'h3':
            return <h3 className={className}>{children}</h3>;
        default:
            return <p className={className}>{children}</p>;
    }
};
