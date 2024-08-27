export const CompleteTodo = (props) => {
  const { todos, onClickBack } = props;

  return (
    <>
      <div className="complete-area">
        <p className="complete-title">完了のTODO</p>
        <ul>
          {todos.map((todo, index) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
