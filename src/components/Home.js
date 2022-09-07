import React from 'react'
import '../components/Home.css';

function Home() {
  return (
    
        <div className="home-navbar">
        <div className="home-navbar-items">
              <div>
                <div>Logoipsum</div>
              </div>
              <div className="home-navbar-items-middle">
                <div>Sales</div>
                <div>Top management</div>
                <div>Sales Ops</div>
                <div>Finance</div>
            </div> 
              <div>
              <button className="home-navbar-subsrcibe">Subscribe</button>
              </div>
        </div>
        </div>
   
  )
}

export default Home 