type Props = {
    children: JSX.Element[] | JSX.Element;
};

export const Main = ({ children }: Props) => {
    return (
        <>
            <main>{children}</main>
        </>
    );
};
