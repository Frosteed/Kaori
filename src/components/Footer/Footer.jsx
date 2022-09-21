import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
        <br /><br /><br />
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-row">
                        <div class="footer-col">
                            <h4>product</h4>
                            <ul>
                                <li><Link to='/'>home</Link></li>
                                <li><Link to='/commands'>commands</Link></li>
                                <li><Link to='/about'>about</Link></li>
                                <li><Link to='/invite'>invite</Link></li>
                                <li><Link to='/support'>support</Link></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="/faq">FAQ</a></li>
                                <li><a href="/terms">terms</a></li>
                                <li><a href="/blogs">blogs</a></li>
                                <li><a href="/privacy">privacy</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>developer</h4>
                            <ul>
                                <li><a href="#">Pranoy#0140</a></li>                    </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer