import { useState } from "react";
import NewToDoItem from "./newToDoItem";

const ToDoItemList = () => {
  const [list, setList] = useState([]);
  return (
    <>
      <ul>
        {list.map((item) => {
          return (
            <li key={item}>
              <p>{item}</p>
            </li>
          );
        })}
      </ul>
      <NewToDoItem setList={setList} />
    </>
  );
};

export default ToDoItemList;
