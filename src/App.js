import "./App.css";
import Calculator from "./components/Calculator";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>MyPurpleCalculator</title>
        <link rel="canonical" href="" />
        <meta name="description" content="a cute purple calculator" />
      </Helmet>
      <Calculator />
    </div>
  );
}

export default App;
