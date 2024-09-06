export const Practice4 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  }
  const onClickPractice = () => calcTotalFee(1000);
  return (
    <div>
      <h1>Practice 4</h1>
      <p>
        練習問題: 引数の型指定
      </p>
      <button onClick={onClickPractice}>Click me!</button>
    </div>
  )
}