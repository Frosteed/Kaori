import './Home.css'
import { links } from '../../data'
const Home = () => {

  return (
    <main>
      <section class="header container">
        <div>
          <h1>Build the best Discord Server!</h1>
          <h4>Configure moderation, leveling, auto moderation, button roles and much more!</h4>
          <div>
            <button className="btn" onClick={()=>{window.location.href = links.invite}}>Get Started</button>
          </div>
        </div>
      </section>
    </main>


  )
}

export default Home