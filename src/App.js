import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Styles/App.scss";
import Search from "./Components/Search";
import List from "./Components/List";
import Container from "react-bootstrap/Container";
import { Provider } from "react-redux";
import configureStore from "./Store";

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container>
          <Search />
          <List />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
