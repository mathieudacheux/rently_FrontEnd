import Button from '../atoms/Button.tsx'
import RedirectText from '../atoms/RedirectText.tsx'
import ToggleTheme from '../atoms/Toggle/ToggleTheme.tsx'
import Rently from '../../assets/Rently.svg'

export default function Navbar(): JSX.Element {
  return (
    <nav className='navbar bg-background border-b-2'>
      <div className='flex w-1/4'>
        <a>
          <img src={Rently} className='logo' alt='Rently Logo' />
        </a>
      </div>
      <div className='flex justify-end w-3/4'>
        <RedirectText text='navbar.buy' to='BUY' />
        <RedirectText text='navbar.sell' to='SELL' />
        <RedirectText text='navbar.gestion' to='GESTION' />
        <RedirectText text='navbar.agency' to='AGENCY' />
        <RedirectText text='navbar.login' to='LOGIN' />
        <Button text='navbar.login' />
        <ToggleTheme />
      </div>
    </nav>
  )
}
