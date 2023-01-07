import { FormInterface, UseForm } from '../hooks/useForm'

export const Form = () => {
  const INITIAL_STATE: FormInterface = {
    name: ''
  }
  const {form: formState, handleChange, handleSubmit }  = UseForm(INITIAL_STATE)

  return (
    <div className='mx-auto container'>
    <form>
      <div className='flex flex-col gap-2'>
        <label htmlFor='name'>Name</label>
        <input 
        type='text' id='name' 
        name='name'
        value={formState.name}
        onChange={handleChange}
        />
      </div>
    </form>
    </div>
  )
}
