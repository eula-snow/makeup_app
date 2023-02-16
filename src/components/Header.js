import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <div>
            <header>
                <h1>Make Up App</h1>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Main">Main</NavLink>
                </nav>
            </header>
        </div>
    )
}