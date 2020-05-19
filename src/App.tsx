import React from "react";
import { Provider } from "react-redux";
import { store } from "./ducks";
import IndexPage from "./pages";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <IndexPage />
      </Provider>
    </>
  );
};

App.displayName = "AnimeFy App";
export default App;
