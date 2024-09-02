import {Header} from "../atom/layout/Header";
import {Footer} from "../atom/layout/Footer";

export const DefaultLayout = (props) => {
    const { children } = props;
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}