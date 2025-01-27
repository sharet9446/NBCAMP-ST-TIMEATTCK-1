import { useState } from "react";
import "./App.css";

function App() {
  const [countrylist, setCountrylist] = useState([]);
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");
  const [bronse, setBronse] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setCountrylist({ ...countrylist, country, gold, silver, bronse });
  }

  function handleClick() {
    setCountry("");
    setGold("");
    setSilver("");
    setBronse("");
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            나라 이름
            <input type="text" />
          </label>
          <label>
            금메달
            <input type="number" min="0" max="99" />
          </label>
          <label>
            은메달
            <input type="number" min="0" max="99" />
          </label>
          <label>
            동메달
            <input type="number" min="0" max="99" />
          </label>
          <button type="submit">제출</button>
          <button type="button">수정</button>
        </form>
        {/* <ul>
          {setCountrylist.map((item) => (
            <li>{item.country}</li>
          ))}
        </ul> */}
      </div>
    </>
  );
}

export default App;
