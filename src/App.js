import './App.css'
import { useState } from 'react'
import FillOptions from './FillOptions'

function App () {
  const [weight, setWeight] = useState(0)
  const [amount, setAmount] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)

  function calculate (e) {
    e.preventDefault()
    let litres = amount * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - burning * time
    let alcohol = 0
    if (gender === 'male') {
      alcohol = gramsLeft / (weight * 0.7)
    } else {
      alcohol = gramsLeft / (weight * 0.6)
    }
    setResult(alcohol)
  }

  return (
    <form onSubmit={calculate}>
      <h3>Calculating alcohol blood level</h3>

      <div>
        <label>Weight</label>
        <output>{setWeight}</output>
        <input
        tyype='number'
        value={weight}
        onChange={e => setWeight(e.target.value)}
      />
      </div>
    

      <div>
        <label>Bottles</label>
        <select value={amount} onChange={e => setAmount(e.target.value)}>
          <FillOptions />
        </select>
      </div>

      <div>
        <label>Time</label>
        <select value={time} onChange={e => setTime(e.target.value)}>
          <FillOptions />
        </select>
      </div>

      <div>
        <label>Gender</label>
        <input
          type='radio'
          name='gender'
          value='male'
          defaultChecked
          onChange={e => setGender(e.target.value)}
        />{' '}
        <label>Male</label>
        <input
          type='radio'
          name='gender'
          value='female'
          onChange={e => setGender(e.target.value)}
        />{' '}
        <label>Female</label>
      </div>

      <div>
        <output>{result.toFixed(1)}</output>
      </div>

      <div>
        <button>Calculate</button>
      </div>
    </form>
  )
}

export default App
