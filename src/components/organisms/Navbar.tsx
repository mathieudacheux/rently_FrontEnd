import Button from '../atoms/Button.tsx'
import RedirectText from '../atoms/RedirectText.tsx'
import Rently from '../../assets/Rently.svg'
import { Link, useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../../routes/routes.ts'

export default function Navbar(): JSX.Element {
  const navigate = useNavigate()
  const isConnected = window.localStorage.getItem('token')

  return (
    <nav className='navbar bg-background'>
      <div className='flex align-middle w-4/12 lg:w-4/12'>
        <Link to={APP_ROUTES.HOME}>
          <img src={Rently} className='logo p-2' alt='Rently Logo' />
        </Link>
      </div>
      <div className='w-6/12 hidden sm:hidden md:flex md:w-10/12 lg:w-8/12 justify-end p-2'>
        <RedirectText text='navbar.properties' to='PROPERTIES' />
        <RedirectText text='navbar.gestion' to='GESTION' />
        <RedirectText text='navbar.agency' to='AGENCY' />
        {isConnected ? (
          <Button
            onClick={() => navigate(APP_ROUTES.ACCOUNT)}
            text='navbar.account'
          />
        ) : (
          <Button
            onClick={() => navigate(APP_ROUTES.LOGIN)}
            text='navbar.login'
          />
        )}
      </div>
      <div className='dropdown w-8/12 md:hidden flex justify-end'>
        <label
          tabIndex={0}
          className='btn btn-ghost btn-circle text-neutral-900'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            style={{ transform: 'rotateY(180deg)' }}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h7'
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className='menu menu-sm dropdown-content z-[1] p-2 shadow bg-white w-52 rounded-md top-[60px]'
        >
          <RedirectText text='navbar.properties' to='PROPERTIES' />
          <RedirectText text='navbar.gestion' to='GESTION' />
          <RedirectText text='navbar.agency' to='AGENCY' />
          {isConnected ? (
            <Button
              onClick={() => navigate(APP_ROUTES.ACCOUNT)}
              text='navbar.account'
            />
          ) : (
            <Button
              onClick={() => navigate(APP_ROUTES.LOGIN)}
              text='navbar.login'
            />
          )}
        </ul>
      </div>
    </nav>
  )
}
