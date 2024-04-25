import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Nav = () => {
  return (
    <nav className="py-4 border-b">
    <div className="navbar-container">
      
      <div className="logo w-12">
        <Link to='/'>
          <img src={logo} alt="search" className='w-full'/>
        </Link>
      </div>
      <div className="auth-buttons">
        <button className="btn btn-primary">sign in</button>
        <button className="btn btn-outline">sign up</button>
      </div>
    </div>
  </nav>
  )
}

export default Nav