import React from 'react'
import './Link.css'


export const Invite = () => {
  return (
    <>
        <div className="container link-header">
            <h2>Invite Araki Bot</h2>
            <button className="btn link-route-btn">
                Invite Me
            </button>
        </div>
    </>
  )
}

export const Support = () => {
    return (
      <>
          <div className="container link-header">
              <h2>Join Araki's Server</h2>
              <button className="btn link-route-btn">
                  Join Server
              </button>
          </div>
      </>
    )
  }
  
  export const Vote = () => {
    return (
      <>
          <div className="container link-header">
              <h2>Vote For Araki</h2>
              <button className="btn link-route-btn">
                  Vote
              </button>
          </div>
      </>
    )
  }
  