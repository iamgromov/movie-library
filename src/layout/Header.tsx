function Header() {
  return (
    <nav className='cyan darken-2'>
      <div className='nav-wrapper'>
        <a
          href='#'
          className='brand-logo'
        >
          Movies Library
        </a>
        <ul
          id='nav-mobile'
          className='right hide-on-med-and-down'
        >
          <li>
            <a href='!#'>Repos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
