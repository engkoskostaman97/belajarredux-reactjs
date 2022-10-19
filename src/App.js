import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import store from './store/index'
function App() {
  return (
    <div className="App">
      <Counter store={store} />
    </div>
  );
}

export default App;
