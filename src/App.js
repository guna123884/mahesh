import "./App.css";
import Form from "./Form";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

function App() {
  const submit = (values) => {
    console.log(values);
  };
  return (
    <Provider store={store}>
      <div className="App">
        <Form onSubmit={submit} />
      </div>
    </Provider>
  );
}

export default App;
