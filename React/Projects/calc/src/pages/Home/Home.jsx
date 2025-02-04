import Button from "../../Components/Button";
import "./Home.css";
import { GiHamburgerMenu } from "react-icons/gi";
function Home() {
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

  return (
    <section>
      <div className="calc-cont">
        <nav>
          <GiHamburgerMenu size={20} color="white" />
          <p>Standard</p>
        </nav>
        <div className="input-cont">
          <input type="number" />
        </div>

        <div className="btn-cont">
          {calculatorSymbols.map((item, index) => {
            if (index < 8 || (index !== 23 && (index + 1) % 4 === 0)) {
              return (
                <Button
                  key={index}
                  symbol={item}
                  value={index}
                  bgColor="#333031"
                />
              );
            } else if (index === 23) {
              return (
                <Button
                  key={index}
                  symbol={item}
                  value={index}
                  bgColor="#4cc2ff"
                />
              );
            } else {
              return (
                <Button
                  key={index}
                  symbol={item}
                  value={index}
                  bgColor="#3c3a3b"
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
