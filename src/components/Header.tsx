// import { ReactComponent as NasaLogo } from '../assets/nasa-logo.svg'

import Logo from '../assets/nasa.svg';

function Header() {

  return (
	  <header className="page-header">
		<div className='container'>
			<nav>
				<img src={Logo} className="brand" alt="NASA logo" width="72px" />
				<ul>
					  <li><a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABl0lEQVR4nO2ZW0rDQBSGP0REEN2E1w0oaLoZBX2yvoouw7QrUOsWFHEHugYviY/eKER9acrADEggaSZJzRmYD+atD/9/embOJeDxeDwNEAAXwAvwC8TAFdBBODNADxgBac7pA7MI5axAeNaEOHYmRD57VJqJQuV8anEGCENdWBsD6mKLIrE08IMwHi0NRAhhHjgEPi0NXLYtfA440JG0EZ62/QqpiHf1JcyKSkqKD6UJfwWOgAUtrqgehE1U4g399x8De8BqDeFd/Zu/mF4o0r1QpHNeFbtarAN3OZG5AVZqCp8qW8DHhNx8B7YLhMdtCFcs6ahVeS1aFW44dVW44cFSeCJFuGFoaeALYQwtDai2QBT3rqfQieuXeDHnXXfKyGaJQvYmtZAZ1oDbHPHXwLLkViJrZF83c7uZHihLFSMdPbTHkhZbZdvpnvTFVhMDTR9Bs3DV1y3A8aF+gDCeKtQWUXy7vtiyXa+IWWwZzi0NqKHf2fX6qIkNxTQIJS+2yn5iCv9jsTVtAn0nnvVr09hiy+PxIJsx2yHkCXOwfUIAAAAASUVORK5CYII=" alt="share" width="18px;"/></a></li>
					  <li><button className="outline contrast">Reload</button></li>
				</ul>
			</nav>
		</div>
    </header>
  )
}

export default Header;

