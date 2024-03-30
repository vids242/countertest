import logo from './logo.svg';
import './App.css';
import Counter from './admine/container/Counter/Counter';
import { Provider } from 'react-redux';
import { configureStore } from './Redux/store';

function App() {
  const store = configureStore()
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider >
    </div >
  );
}

export default App;
