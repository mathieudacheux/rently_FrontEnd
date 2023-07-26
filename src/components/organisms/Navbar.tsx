import Button from '../atoms/Button.tsx'
import RedirectText from '../atoms/RedirectText.tsx'
import Rently from '../../assets/Rently.svg'
import { useAppSelector } from '../../store/store.ts'
import { selectedUserId } from '../../features/user/userSlice.ts'

export default function Navbar(): JSX.Element {
  const isConnected = useAppSelector(selectedUserId) !== null

  return (
    <nav className='navbar bg-background h-25'>
      <div className='flex align-middle md:w-2/12 lg:w-4/12'>
        <img src={Rently} className='logo p-2' alt='Rently Logo' />
      </div>
      <div className='w-6/12 hidden sm:hidden md:flex md:w-10/12 lg:w-8/12 justify-end p-2'>
        <RedirectText text='navbar.buy' to='BUY' />
        <RedirectText text='navbar.sell' to='SELL' />
        <RedirectText text='navbar.gestion' to='GESTION' />
        <RedirectText text='navbar.agency' to='AGENCY' />
        {isConnected ? (
          <Button text='navbar.account' />
        ) : (
          <Button text='navbar.login' />
        )}
      </div>
    </nav>
  )
}
