import {useState} from 'react'

const Form = ({ colors, setColors }) => {
  const [box, setBox] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setColors([...colors, box])
    setBox('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Color: </label>
        <input type="text" onChange={(e) => setBox(e.target.value)} value={box} />
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}

export default Form