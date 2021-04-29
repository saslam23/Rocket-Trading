import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            <p style={{paddingTop:'5px'}}><b>Have further questions?</b> Email us: profit.rocket@gmail.com</p>
            <footer>Copyright &copy; {(new Date().getFullYear())} Rocket Trading</footer>
        </div>
    )
}
