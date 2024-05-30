import './App.css'
import {Header} from "./components/Header.jsx";
import {UserInput} from "./components/UserInput.jsx";
import {useState} from "react";
import {Results} from "./components/Results.jsx";

function App() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const inputIsvaid = () => {
        if (userInput.initialInvestment < 1 || userInput.annualInvestment < 1 || userInput.expectedReturn < 1 || userInput.duration < 1) {
            return false;
        }
        return true;
    }

    function handleInputChange(input, value) {
        setUserInput({
            ...userInput,
            [input]: +value
        });
    }

    return (
        <>
            <Header/>
            <UserInput onChange={handleInputChange} userInput={userInput}/>
            {!inputIsvaid() && <p className="error">Please enter valid input</p>}
            {inputIsvaid() && <Results input={userInput}/>}
        </>
    )
}

export default App
