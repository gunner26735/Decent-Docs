import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.css';

export default class LandingPage extends Component {
    render() {
        return (
            <>
            <nav>
            <ul>
                <li><Link to="/">&#127891;DecentDocs</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
         </nav>
            <section>
            <h1>Verify Document<br />with DecentDocs.</h1>
            <p>Verify your Document with us<br /> and Use it WorldWide.</p>
            <Link to="/login" className="button">Get Started</Link>
         </section>
         <section className="section">
            <div></div>
        </section>
        </>
        )
    }
}
