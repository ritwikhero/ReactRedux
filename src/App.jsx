import "./App.css";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import PizzaBox from "./components/PizzaBox";

function App() {
  return (
    <>
      <Provider store={store}>
        <PizzaBox />
      </Provider>
    </>
  );
}

export default App;
