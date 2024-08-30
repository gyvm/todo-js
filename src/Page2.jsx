import {Link} from "react-router-dom";

export const Page2 = () => {
    return (
        <div>
            <h1>Page2ページです</h1>
            <Link to={"/page2/111"}>URLパラメータ111</Link>
            <br/>
            <Link to={"/page2/999?name=hogehoge"}>クエリパラメータ</Link>
        </div>
    );
}