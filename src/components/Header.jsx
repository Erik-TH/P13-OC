import { NavLink } from "react-router-dom"
import argentBankLogo from "../assets/argentBankLogo.png"

export default function Header() {
    return (
        <header className="component header">
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo">
                    <img src={argentBankLogo} alt="ArgentBank's logo" className="main-nav-logo-image" />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>

                <div>
                    <NavLink to="/login" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}