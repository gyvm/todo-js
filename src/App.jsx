import {ChildArea} from "./ChildArea";
import {useCallback, useMemo, useState} from "react";

export const App = () => {
    const [text, setText] = useState('');
    const [open, setOpen] = useState(false);
    console.log('Appがレンダリングされた！！');

    const onChangeText = (e) => setText(e.target.value);
    const onClickOpen = () => setOpen(!open);
    const onClickClose = useCallback(() => setOpen(false), [open]);
    const temp = useMemo(() => 1 + 3, []);
    console.log(temp);

    return (
        <div>
            <input value={text} onChange={onChangeText}/>
            <br/>
            <br/>
            <button onClick={onClickOpen}>表示</button>
            <ChildArea open={open} onClickClose={onClickClose}/>
        </div>
    )
}