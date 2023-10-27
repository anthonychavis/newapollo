type Props = {
    children: JSX.Element | JSX.Element[];
    className: string;
    type: string;
};

export const LargeContainer = ({ children, className, type }: Props) => {
    switch (type) {
        case 'header':
            return <header className={className}>{children}</header>;
        case 'main':
            return <main className={className}>{children}</main>;
        case 'footer':
            return <footer className={className}>{children}</footer>;
        default:
            return <div className={className}>{children}</div>;
    }
};
