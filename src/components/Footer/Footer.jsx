import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
        <br /><br /><br />
        <footer class="footer">
  	 <div class="footer-container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>explore</h4>
  	 			<ul>
  	 				<li onClick={()=>{ window.location.href = '#'}} ><Link to='/' >home</Link></li>
  	 				<li onClick={()=>{ window.location.href = '#'}} ><Link to='/commands' >commands</Link></li>
  	 				<li onClick={()=>{ window.location.href = '#'}} ><Link to='/policy' >privacy policy</Link></li>
  	 				<li onClick={()=>{ window.location.href = '#'}} ><Link to='/terms' >terms</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get in touch</h4>
  	 			<ul>
  	 				<li onClick={()=>{ window.location.href = '#'}} ><Link to='/invite' >invite</Link></li>
  	 				<li onClick={()=>{ window.location.href = '#'}} ><Link to='/support' >support server</Link></li>
  	 				<li onClick={()=>{ window.location.href = '#'}} ><Link to='/vote' >vote</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>info</h4>
  	 			<ul>
  	 				<li onClick={()=>{ window.location.href = '#'}} ><Link to='/faq' >faq</Link></li>
                    <li onClick={()=>{ window.location.href = '#'}} ><Link to='/blogs' >blogs</Link></li>
                    <li onClick={()=>{ window.location.href = '#'}} ><Link to='/tutorials' >tutorials</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>developer</h4>
  	 			<ul>
                    <li onClick={()=>{ window.location.href = '#'}} ><Link to='/support' >Pranoy#0140</Link></li>
                </ul>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
        </>
    )
}

export default Footer