import { Link } from 'react-router-dom';
import './style.css'

export function Button() {
  return (
      <div className='navbar-button-link'>
        <button className='navbar-button'>
          <Link className='navbar-link' to="/">Voltar para a Home</Link>
        </button>
      </div>
  );
}