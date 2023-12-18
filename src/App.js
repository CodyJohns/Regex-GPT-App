import './App.css';
import Main from "./pages/Main";
import Menu from "./components/Menu";

function App() {
  return (
      <div className="App">
          <div>
              <Menu />
          </div>
          <div className={"main-content"}>
              <Main />
          </div>
      </div>
  );
}

export default App;
