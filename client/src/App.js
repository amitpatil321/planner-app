import Route from './routes'
import { Provider } from "react-redux";
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Route/>
      </div>
    </Provider>
  );
}

export default App;
