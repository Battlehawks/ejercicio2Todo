import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Cabecera from './components/Cabecera'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [Lista, setLista] = useState([])
  const [tarea, setTarea] = useState("")

  const addTarea = () => {
    setLista([
      {id:Lista.length+1, text: tarea, status: false },
      ...Lista
    ])
  }

  const handleRemoveItem = (e) => {
    setLista(Lista.filter(item => item.status.toString() ==="false"));
   };

  const changeHandler = (e) => {
      setTarea(e.target.value)
  }
  const actualizarLista=(tareaId, newStatus)=> {
    setLista(Lista.map(tarea => {
      if (tarea.id === tareaId) {
        return { ...tarea, status: newStatus };
      } else {
        return tarea;
      }
    }));
  }
  const changeBox= (e) => {
   setTarea(setLista(Lista.filter(item => item.index ==e.index).status = true));
    
  }
  return (
    <div className="App">
      <div className="card">
        <div className="card-body">
          <Cabecera></Cabecera>

          <div className="input-group mb-3">
            <input type="text" className="form-control" value={tarea} onChange={changeHandler} placeholder="Tarea" />
            <button type={'button'} className='btn btn-primary' onClick={addTarea}>Añadir</button>
            <button type={'button'} className='btn btn-danger' onClick={handleRemoveItem}>Limpiar</button>
          </div>

          <div className="d-grid gap-3">
            {
              Lista.map((item) => (
                <div key={item.id} className="form-check">
                  <input className="form-check-input" type={'checkbox'} value="" id="tareaCheckBox" checked={item.status}
              onChange={e => {
                actualizarLista(
                  item.id,
                  e.target.checked
                );
              }}></input>
                  <label className="form-check-label" htmlFor="tareaCheck">
                    {item.text}
                  </label>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
