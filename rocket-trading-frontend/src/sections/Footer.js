import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            <p style={{paddingTop:'5px'}}><b>Have further question?</b> Email us at: profit.rocket@gmail.com</p>
            <footer>Copyright &copy; {(new Date().getFullYear())} Venture</footer>
        </div>
    )
}
