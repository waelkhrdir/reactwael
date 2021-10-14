import React from 'react'
import taswira from './wl.jpg'
import "./style.css"
function App() {
  return (
    <div>
             <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">waelbk</h1>
          <br />
          <img src={taswira} />
          <br />
          <img src="wael.jpg"/>
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
    </div>
  )
}

export default App
