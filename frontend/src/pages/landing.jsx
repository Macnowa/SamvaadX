import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
export default function LandingPage() {
    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav className='landingNav'>
                <div className='navHeader'>
                    <div className='brandLogo'>S</div>
                    <div>
                        <h2>SamvaadX</h2>
                        <p>Secure, modern video calling</p>
                    </div>
                </div>
                <div className='navlist'>
                    <button onClick={() => router('/samvaad-guest')}>Instant Room</button>
                    <button onClick={() => router('/auth')}>Sign In</button>
                </div>
            </nav>
            <main className="landingHero">
                <section className="heroText">
                    <p className='eyebrow'>Realtime conversations built for everyone</p>
                    <h1>Bring your world closer with <span>SamvaadX</span></h1>
                    <p className='heroSubtitle'>Video calling reimagined for simple, seamless conversations with family, friends, and teams.</p>
                    <div className='heroActions'>
                        <button onClick={() => router('/samvaad-guest')}>Start Instant Call</button>
                        <Link to={'/auth'}>Create Account</Link>
                    </div>
                </section>
                <section className='heroPreview'>
                    <div className='phoneMockup'>
                        <img src='/mobile.png' alt='SamvaadX preview' />
                    </div>
                </section>
            </main>
        </div>
    )
}
