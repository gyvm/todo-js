export const Practice3 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total
  }
  const onClickPractice = () => {
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total)
  }
  return (
    <div>
      <h1>Practice 3</h1>
      <p>
        練習問題: 変数の型指定
      </p>
      <button onClick={onClickPractice}>Click me!</button>
    </div>
  )
}