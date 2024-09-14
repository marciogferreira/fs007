import Menu from "./Menu";

function LayoutDefault({ children }) {
    return (
        <>
            <Menu />
            <div className="container">
                {children}
            </div>
        </>
    )
}

export default LayoutDefault;