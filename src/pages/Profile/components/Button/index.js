import './style.css'
import email from '../../../../assets/Mail.svg'
import linkedin from '../../../../assets/linkedin.svg'

export function ButtonContact() {
    return (
        <div className='button-contato'>
            <button className='button-email'>
                <img className='icon' src={ email } alt='E-mail' title='E-mail' />
                <p className='email'>E-mail</p>
            </button>
            <button className='button-linkedin'>
                <img className='icon' src={ linkedin } alt='Linkedin' title='Linkedin' />
                <p className='linkedin'>Linkedin</p>
            </button>
        </div>
    )}