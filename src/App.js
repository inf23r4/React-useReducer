import './App.css';
import Count from './component/Count';
import Navbar from './component/Navbar';
import ProductApp from './component/productApp';
import style from './component/style';
import TodoApp from './component/TodoApp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h3>Count increment/decrement</h3>
      <Count/>
      <h3>Add, Update, Delete, Todo</h3>
      <TodoApp/>
      <h3>Show Product and Add to Cart</h3>
      <ProductApp/>
      <div>
      <div style={style.a}>
          <a href="https://github.com/inf23r4/React-useEffect.git" target="_blank" rel="noreferrer">https://github.com/inf23r4/React-useEffect.git</a>
        </div>
      </div>
    </div>
  );
}

export default App;
