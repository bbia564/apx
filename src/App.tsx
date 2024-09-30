import "./App.css";
import RouteConfig from "./route";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <RouteConfig></RouteConfig>
      </div>
    </HashRouter>
  );
}

export default App;
