import "./App.css";
import Header from "./components/Header";
import ToDoListItem from "./components/toDoItemList";

function App() {
  return (
    <div className="App">
      <Header />
      <ToDoListItem />
    </div>
  );
}

export default App;
