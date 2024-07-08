import Header from "./componets/Header";
import UserInput from "./componets/UserInput";
import Results from "./componets/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    Initialinvestment: 10000,
    Anunalinvestment: 1200,
    expectedreturn: 6,
    duration: 10,
  });
  const inputfield = userInput.duration >= 1;
  function handlechange(inputid, newvalue) {
    setUserInput((preUserInput) => {
      return {
        ...preUserInput,
        [inputid]: +newvalue,
      };
    });
  }
  return (
    <div>
      <Header />
      <UserInput userInput={userInput} onChangeinput={handlechange} />
      {!inputfield && <p className="center">Please enter valid data</p>}
      {inputfield && <Results input={userInput} />}
    </div>
  );
}

export default App;
