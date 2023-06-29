import RedirectText from '../atoms/RedirectText.tsx'
import ToggleTheme from '../atoms/Toggle/ToggleTheme.tsx'

export default function Navbar(): JSX.Element {
  return (
    <div className='navbar bg-background'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-3xl text-primary px-1'>
          Rently
        </a>
      </div>
      <div className='flex-none hidden md:block'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <RedirectText text='navbar.buy' to='BUY' />
          </li>
          <li>
            <RedirectText text='navbar.sell' to='SELL' />
          </li>
          <li>
            <RedirectText text='navbar.gestion' to='GESTION' />
          </li>
          <li>
            <RedirectText text='navbar.agency' to='AGENCY' />
          </li>
          <li>
            <RedirectText text='navbar.login' to='LOGIN' />
          </li>
          <li>
            <ToggleTheme />
          </li>
        </ul>
      </div>
    </div>
  )
}
