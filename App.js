import ReactNavigation from "./navigation";
import { Provider } from "react-redux";
import store from "./redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <ReactNavigation />
    </Provider>
  );
}
