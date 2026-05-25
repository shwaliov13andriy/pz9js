import { useState } from "react";
import UserCard from "./components/UserCard";
import Counter from "./components/Counter";
import ClickButton from "./components/ClickButton";
import FruitList from "./components/FruitList";

export default function App() {

  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
    setText("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };


  const isLoggedIn = true;

  return (
    <div>
      <h1>Практична робота №9</h1>
      <p>React + Vite</p>

      <h2>User Cards</h2>
      <UserCard name="Іван" role="Student" />
      <UserCard name="Олена" role="Teacher" />

      <h2>Counter</h2>
      <Counter />

      <h2>Click Button</h2>
      <ClickButton />


      <h2>Fruit List</h2>
      <FruitList />

  
      <h2>Login State</h2>
      {isLoggedIn ? <p>Ви увійшли</p> : <p>Увійдіть у систему</p>}


      <h2>Mini ToDo</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span
              onClick={() => toggleTask(task.id)}
              style={{ textDecoration: task.done ? "line-through" : "none" }}
            >
              {task.text}
            </span>
            <button onClick={() => removeTask(task.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
