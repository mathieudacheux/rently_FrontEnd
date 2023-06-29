import RedirectText from '../atoms/RedirectText.tsx'
import ToggleTheme from '../atoms/Toggle/ToggleTheme.tsx'

export default function Navbar(): JSX.Element {
  return (
    <nav className='navbar bg-primary'>
      <div className='flex w-1/4'>
        <a className='btn btn-ghost normal-case text-3xl text-primary px-1'>
          Rently
        </a>
      </div>
      <div className='flex justify-end w-3/4'>
        <RedirectText text='navbar.buy' to='BUY' />
        <RedirectText text='navbar.sell' to='SELL' />
        <RedirectText text='navbar.gestion' to='GESTION' />
        <RedirectText text='navbar.agency' to='AGENCY' />
        <RedirectText text='navbar.login' to='LOGIN' />
        <ToggleTheme />
      </div>
    </nav>
  )
}
