import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setData(e.target.value);
  };

  // debouncing

  return (
    <div>
      <input onChange={handleChange} value={data} />
      <div>charater:{data}</div>
      <div>vowel:{data}</div>
      <div>const:{data}</div>
      <div>spaces:{data}</div>
      <div>words:{data}</div>
      <div>length:{data}</div>
    </div>
  );
}

export default App;
