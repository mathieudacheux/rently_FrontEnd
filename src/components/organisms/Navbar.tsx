import Button from '../atoms/Button.tsx'
import Link from '../atoms/Link.tsx'

export default function Navbar(): JSX.Element {
  return (
    <div className='navbar bg-background'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-3xl text-primary'>Rently</a>
      </div>
      <div className='flex-none hidden md:block'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link text='navbar.buy' />
          </li>
          <li>
            <Link text='navbar.sell' />
          </li>
          <li>
            <Link text='navbar.gestion' />
          </li>
          <li>
            <Link text='navbar.agency' />
          </li>
          <li>
            <Button text='navbar.login' />
          </li>
        </ul>
      </div>
    </div>
  )
}
