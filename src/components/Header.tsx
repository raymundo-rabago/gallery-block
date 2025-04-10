// import { ReactComponent as NasaLogo } from '../assets/nasa-logo.svg'

import Logo from '../assets/nasa.svg';

function Header() {

  return (
	  <header className="page-header">
		<div className='container'>
			<nav>
				<img src={Logo} className="brand" alt="NASA logo" width="72px" />
				<ul>
					  <li><a href="#">Share</a></li>
					  <li><button className="outline secondary">Reload</button></li>
				</ul>
			</nav>
		</div>
    </header>
  )
}

export default Header;

