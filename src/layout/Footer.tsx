function Footer() {
  return (
    <footer className='page-footer cyan darken-4'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} Copyright Text
          <a
            className='grey-text text-lighten-4 right'
            href='#!'
          >
            Repos
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
