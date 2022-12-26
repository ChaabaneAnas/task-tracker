import { useState }  from 'react'

const AddTask = ({handleSubmit}) => {
  const [input, setInput] = useState({
    title: '',
    date: '',
    reminder: false
  })

  const sendlocal = (e) => {
    e.preventDefault()
    if (!input.title || !input.date) {
      alert('Please fill the iput fields')
    }

    handleSubmit(input)

    setInput(
      {
       title: '',
       date: '',
       reminder: false
      }
    )
  }


  return (
    <div>
      <form onSubmit={sendlocal}>
        <div>
          <label className='label-control' htmlFor='title' >Task:</label>
          <input 
          className='form-control'
          type='text'
          id='title'
          name="title"
          value={input.title}
          placeholder="work meeting"
          onChange={(e) => setInput({...input, title: e.target.value})}
          ></input>
        </div>
        <div>
          <label className='label-control' htmlFor='date' onChange={(e) => setInput({...input, date: e.target.value})}>Date:</label>
          <input 
          className='form-control'
          type='text'
          id='date'
          name="title" 
          value={input.date}
          placeholder="feb 5th 8:00am"
          onChange={(e) => setInput({...input, date: e.target.value})}
          ></input>
        </div>

        <div className='form-check'>
          <input 
          className='form-check-input'
          type='checkbox' 
          id='check' name="title" 
          checked = {input.reminder}
          placeholder="feb 5th 8:00am"
          onChange={(e) => setInput({...input, reminder: e.target.checked})}
          ></input>
          <label className='form-check-label' htmlFor='check'>reminder</label>
        </div>

        <button className='btn btn-success' type='submit'>Add</button>

      </form>
    </div>
  )
}

export default AddTask
