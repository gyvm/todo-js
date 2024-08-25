export const ColorfulMessage = (props) => {
  console.log("--ColorfulMessage--");
  const color = props.color;
  const message =
    props.message || props.children || "メッセージが設定されていません";
  const contentStyle = {
    color,
    fontSize: "18px",
  };

  return <p style={contentStyle}>{message}</p>;
};
