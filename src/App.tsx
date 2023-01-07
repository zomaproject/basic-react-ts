import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Counter } from './components/Counter.js'
import { Form } from './components/Form.js'
import { Nav } from './pages/Nav.js'
import { CounterObject } from './components/CounterObject.js'
import {CounterReducerComponent } from './components/counter_reducer/CounterReducer'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route path='/counter' element={<Counter initialValue={20} />} />
          <Route path='/form' element={<Form />} />
          <Route path='/counter2' element={<CounterObject />} />
          <Route path='/counter-reducer' element={<CounterReducerComponent/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
