import React from 'react'
import { categorias } from '../utils/constants'
import '../styles/Sidebar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Sidebar = ({ seleccionarCategoria, setSeleccionarCategoria }) => {

  const [activo, setActivo] = useState(true)

  const handleClick = () => {
    setActivo(activo => !activo)
  }

  return (
    <div className={`${activo ? 'desplegar' : ''} sidebar`}>
      <div
        onClick={handleClick}
        className='btn-sidebar'>
        <span className="fas fa-bars"></span>
      </div>
      {
        categorias.map((item, i) => {
          return (
            <Link key={i} >
              <div
                onClick={() => setSeleccionarCategoria(item.name)}
                className={`${item.name === seleccionarCategoria && 'active'} sections`}
              >
                <span className='icon-sidebar'>{item.icon}</span>
                <span className={`${activo ? 'show' : ''} name`}>{item.name}</span>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Sidebar