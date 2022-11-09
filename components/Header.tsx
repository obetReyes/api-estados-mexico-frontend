import React,{useState} from 'react'
import Link from 'next/link';
import { useAut } from '../contexts/authContext';
const Header = () => {
    const [open, setIsOpen] = useState<boolean>(false);
    const {user, logOut} = useAut()
    const currentUser = user?.name

    const handleNav = () => {
      setIsOpen(!open)
    }
    return (
      <header className="flex  mx-auto justify-between  p-4 bg-cyan-800 text-white">
        <h1>foro mexico</h1>
        <nav className={`${open ?"flex flex-col h-screen w-screen fixed top-16 left-0 pl-4 space-y-4 bg-slate-400" : "hidden" } md:flex md:flex-row md:static md:w-fit md:h-fit md:space-y-0 md:space-x-4 md:bg-transparent md:pl-0`}>
          <Link href='/' onClick={handleNav}>Inicio</Link>
          <Link href='/foro' onClick={handleNav}>Foro</Link>
          <button onClick={logOut} className='flex md:hidden'>cerrar sesión</button>
        </nav>
        <div className="flex space-x-4">
            {!user ? <Link href='/sesion/ingreso'>Ingresar</Link> : 
            <>
              <Link  href={`/sesion/${currentUser}`}>{currentUser}</Link>
            <button className='hidden md:flex' onClick={logOut}>Cerrar sesión</button>
            </>}
          <svg className="md:hidden" onClick={handleNav} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z" fill="currentColor" /><path d="M3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="currentColor" /><path d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H10.2625L7.61456 15.6479L4.96662 13H4C3.44772 13 3 12.5523 3 12Z" fill="currentColor" /></svg>
        </div>
      </header>
      )
}

export default Header