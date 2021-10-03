import './App.css';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [amount, setAmount] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);


  function calculate(e) {
    e.preventDefault();
    let alcohol = 0;
    let grams = (((amount * 0.33) * 8 * 4.5) - (weight - 10) * time);
    if(gender === "male") {
      alcohol = grams / (weight * 0.7);
    }
    else {
      alcohol = grams / (weight * 0.6);
    }
    setResult(alcohol);
  }

  return (
    <form  onSubmit={calculate}>
      <h3>Calculating alcohol blood level</h3>

      <div>
        <label>Weight</label>
        <input type="number" step="1" onChange={e => setWeight(e.target.value)} value={weight}/>
      </div>

      <div>
        <label>Bottles</label>
        <input type="number" step="1" onChange={e => setAmount(e.target.value)} value={amount}/>
      </div>

      <div>
        <label>Time</label>
        <input type="number" step="1" onChange={e => setTime(e.target.value)} value={time}/>
      </div>

      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/> <label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/> <label>Female</label>
      </div>

      <div>
        <output>{result.toFixed(1)}</output>
      </div>

      <div>
        <button>Calculate</button>
      </div>

    </form>
  );
}

export default App;
