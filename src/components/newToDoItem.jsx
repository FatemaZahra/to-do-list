import { useState } from "react";

const NewToDoItem = ({ setList }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setList((currList) => {
      return [newItem, ...currList];
    });
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add an Item to the list
        <input
          name="item"
          type="text"
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
        />
      </label>
      <button type="submit">Enter</button>
    </form>
  );
};

export default NewToDoItem;
