import './style.css'
import twitter from '../../../../assets/TwitterIcon.svg'
import facebook from '../../../../assets/FacebookIcon.svg'
import instagram from '../../../../assets/InstagramIcon.svg'
import github from '../../../../assets/GitHubIcon.svg'

export function Footer() {
    return (
        <div className='footer'>
            <img className='footer-icon' src={ twitter } alt='Twitter' title='Twitter' />
            <img className='footer-icon' src={ facebook } alt='Facebook' title='Facebook' />
            <img className='footer-icon' src={ instagram } alt='Instagram' title='Instagram' />
            <img className='footer-icon' src={ github } alt='GitHub' title='GitHub' />
        </div>
    )}