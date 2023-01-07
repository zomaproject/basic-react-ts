import { useState } from 'react'

export interface FormInterface {
  name: string
}
export const UseForm = (initialState: FormInterface) => {

  const [form, setForm] = useState<FormInterface>(initialState)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form)
  }
  return { 
    form,
    handleChange,
    handleSubmit
  }
}


