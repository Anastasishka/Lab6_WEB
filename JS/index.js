const { useState, useEffect } = React;

function App() {
  const [tasks, setTasks] = useState([]);
  
  const [taskInput, setTaskInput] = useState('');

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks)); 
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim() === '') return;
    setTasks([...tasks, taskInput]);
    setTaskInput('');
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Список завдань</h1>
      
      {}
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)} // Оновлення стану при введенні
        placeholder="Введіть завдання"
      />
      <button onClick={addTask}>Додати</button>

      {}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} 
            <button onClick={() => deleteTask(index)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));