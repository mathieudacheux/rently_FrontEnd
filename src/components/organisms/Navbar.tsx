import Link from '../atoms/Link.tsx'

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
            <Link text='navbar.buy' to='BUY' />
          </li>
          <li>
            <Link text='navbar.sell' to='SELL' />
          </li>
          <li>
            <Link text='navbar.gestion' to='GESTION' />
          </li>
          <li>
            <Link text='navbar.agency' to='AGENCY' />
          </li>
          <li>
            <Link text='navbar.login' to='LOGIN' />
          </li>
        </ul>
      </div>
    </div>
  )
}
