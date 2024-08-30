import {Link} from "react-router-dom";

export const Page404 = () => {
    return (
        <div>
            <h1>404ページです</h1>
            <p>ページが見つかりません</p>
            <Link to={"/"}>Topへ戻る</Link>
        </div>
    );
}