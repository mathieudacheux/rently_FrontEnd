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
      <div className='flex align-middle md:w-2/12 lg:w-4/12'>
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
    </nav>
  )
}
