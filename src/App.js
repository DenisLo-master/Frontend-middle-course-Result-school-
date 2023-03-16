import Task1 from './components/Task1.jsx';
import Task2 from './components/Task2.jsx';

function App() {

  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
      <div>
        <h2>Задание №1</h2>
        <Task1 />
      </div>
      <div>
        <h2>Задание №2</h2>
        <Task2 />
      </div>
    </div>
  );
}

export default App