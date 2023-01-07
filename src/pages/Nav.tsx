import { NavLink, Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
export const Nav = () => {


  const location = useLocation()
  const navLinks = [
    { to: '/counter', name: 'Counter' },
    { to: '/form', name: 'Form' },
    { to: '/counter2', name: 'Counter Object' },
    { to: "/counter-reducer", name: "Counter Reducer" }
  ]

  return (
    <>
      <div className='bg-blue-200'>
        <nav className='flex gap-2 container mx-auto justify-center p-3'>
          {navLinks.map((link) => ( 
            <NavLink
              key={link.to}
              to={link.to}
              className={`${location.pathname === link.to ? "text-red-700" : 'text-blue-800'} hover:text-blue-600 font-black text-lg`}
            >
              {link.name}
            </NavLink>
          ))}

        </nav>
      </div>
      <Outlet />
    </>
  )
}
