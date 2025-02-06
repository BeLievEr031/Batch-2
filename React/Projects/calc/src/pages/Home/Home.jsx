import { useState } from "react";
import Button from "../../Components/Button";
import "./Home.css";
import { GiHamburgerMenu } from "react-icons/gi";
function Home() {
  const [inputData, setInputData] = useState("");
  const calculatorSymbols = [
    "%",
    "CE",
    "C",
    "⌫",
    "¹/x",
    "x²",
    "²√x",
    "÷",
    "7",
    "8",
    "9",
    "×",
    "4",
    "5",
    "6",
    "−",
    "1",
    "2",
    "3",
    "+",
    "+/−",
    "0",
    ".",
    "=",
  ];

  const handleClick = (value) => {
    console.log(inputData);
    setInputData(inputData + value + "");
  };

  return (
    <section>
      <div className="calc-cont">
        <nav>
          <GiHamburgerMenu size={20} color="white" />
          <p>Standard</p>
        </nav>
        <div className="input-cont">
          <input type="text" value={inputData} />
        </div>

        <div className="btn-cont">
          {calculatorSymbols.map((item, index) => {
            if (index < 8 || (index !== 23 && (index + 1) % 4 === 0)) {
              return (
                <Button
                  key={index}
                  symbol={item}
                  value={index}
                  bgColorClass="primary"
                  handleClick={handleClick}
                />
              );
            } else if (index === 23) {
              return (
                <Button
                  key={index}
                  symbol={item}
                  value={index}
                  bgColorClass="tert"
                  handleClick={handleClick}
                />
              );
            } else {
              return (
                <Button
                  key={index}
                  symbol={item}
                  value={index}
                  bgColorClass="secondary"
                  handleClick={handleClick}
                />
              );
            }
          })}
        </div>
      </div>
      <div className="history-cont">right div</div>
    </section>
  );
}

export default Home;
