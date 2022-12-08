import React from 'react'
import '../styles/Topbar.css'
import { Link } from 'react-router-dom'
import { IoIosSearch } from 'react-icons/io'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Topbar = () => {

  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState('')

  const [activo, setActivo] = useState(false)

  const handleClick = () => {
    setActivo(activo => !activo)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (searchTerm) {
      navigate(`/search/${searchTerm}`)

      setSearchTerm('')
    }
  }

  return (
    <div className='Navbar'>
      <Link to='/' className='content-auto'>
        <h1 className='logo'>
          <img src="https://i.pinimg.com/originals/7a/3a/01/7a3a0159fc475a79bda7fb9df7430eff.jpg" alt="Logo YouTube" />
          <span>YouTube</span>
        </h1>
      </Link>
      <form
        onSubmit={handleSubmit} 
        className='barra-buscador'>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`${activo ? 'mostrar' : ''} buscador`}
          type="search"
          placeholder='Buscar'
        />
        <div
          onClick={handleClick}
          className={`${activo ? 'activar' : ''} buscador-icon`}>
          <IoIosSearch className='icon' />
        </div>
      </form>
    </div>
  )
}

export default Topbar