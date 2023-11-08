import './App.css';
import Main from "./pages/Main";

function App() {
  return (
      <div className="App">
          <div className={"d-flex justify-content-center"}>
              <div className={"d-flex pt-4"}>
                  <img alt={"Regex-GPT"} src={require("./assets/regex-gpt.png")} className={"logo"} />
                  <div className={"ps-3 pt-2"}>
                      <h2> { "/^{Regex-GPT}$/" }</h2>
                  </div>
              </div>
          </div>
          <Main />
      </div>
  );
}

export default App;
