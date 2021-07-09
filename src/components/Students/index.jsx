import { useEffect, useState } from "react";
import { StudentCard } from "../StudentCard";
import "./styles.css";

export const Students = ({ studentArray, setWelcomePage }) => {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(Math.floor(Math.random() * 11));
  const [choosenOnes, setChoosenOnes] = useState([]);

  useEffect(() => {
    if (count < 3) {
      pickRandom();
    }
  });

  const pickRandom = () => {
    setRandom(Math.floor(Math.random() * 11));

    if (choosenOnes.every((el) => el.house !== studentArray[random].house)) {
      setChoosenOnes([...choosenOnes, studentArray[random]]);
      setCount(count + 1);
    }
  };

  return (
    <div className="Students">
      <h1 className="Students__Title">choosen ones</h1>
      <div className="Container">
        {choosenOnes.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            image={student.image}
            house={student.house}
          />
        ))}
      </div>
      <button
        className="tryAgainBtn"
        onClick={() => {
          setCount(0);
          setChoosenOnes([]);
        }}
      >
        pick new ones
      </button>
      <button
        className="tryAgainBtn"
        onClick={() => {
          setWelcomePage(false);
        }}
      >
        return
      </button>
    </div>
  );
};
