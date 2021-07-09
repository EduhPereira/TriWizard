import "./App.css";
import { useEffect, useState } from "react";
import { Students } from "./components/Students";
import { WelcomePage } from "./components/WelcomePage";
import { HarryPotter } from "./components/HarryPotter";

function App() {
  const [studentArray, setStudentArray] = useState([]);

  const [welcomePage, setWelcomePage] = useState(false);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((results) => results.json())
      .then((results) => setStudentArray(results));
  }, [studentArray]);

  return (
    <div className="App">
      {welcomePage ? (
        <Students studentArray={studentArray} setWelcomePage={setWelcomePage} />
      ) : (
        <>
          <WelcomePage setWelcomePage={setWelcomePage} />
          <HarryPotter />
        </>
      )}
    </div>
  );
}

export default App;
