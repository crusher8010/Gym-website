import './Footer.css';
import Logo from '../../assets/logo.png';
import Github from '../../assets/github.png';
import instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';

function Footer() {
    return (
        <div className='Footer-container'>
            <hr />
            <div className="footer">
                <div className="social-links">
                    <img src={Github} alt="" />
                    <img src={instagram} alt="" />
                    <img src={LinkedIn} alt="" />
                </div>
                <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="blur blur-f1"></div>
            <div className="blur blur-f2"></div>
        </div>
    )
}

export default Footer;