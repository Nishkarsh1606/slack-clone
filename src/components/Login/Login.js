import React from 'react'
import './Login.css'
import slackLogo from '../../assets/slack.png'
import TeamVideo from '../../assets/TeamVid.webm'

function Login() {
  return (
    <div className='Login'>
        <header>
            <nav className='navbar'>
                <div className="company-info">
                    <img src={slackLogo} alt="company brand icon" />
                </div>
                <div className='signup'>
                    <button>Login<br /></button>
                </div>
            </nav>
        </header>
        <body>
            <div className='hero'>
            <div className='hero-text'>
                <h1>Great teamwork starts with a <span className='highlight'>(free) digital HQ</span></h1>
                <h2>This is a free version of slack you can use for team coordination. Feel free to collaborate with me on <br /> <a href="https://github.com/Nishkarsh1606" target={'_blank'} rel="noreferrer">Github @Nishkarsh1606</a></h2>
                <button>Login (it's free!)</button>
            </div>
            <div className='hero-video'>
                <video autoPlay={true} muted width={'700px'}>
                    <source src={TeamVideo} type='video/webm'/>
                </video>
            </div>
            </div>
        </body>
    </div>
  )
}

export default Login