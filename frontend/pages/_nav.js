import navStyle from '../styles/Nav.module.css'

export default function Nav({isAuth, user}) {
    const logout = () => {
        localStorage.setItem('user', '');
        window.location.href = '/';
    }
    return (
        <nav className={"navbar "+navStyle.navbar_width} role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item has-text-weight-bold" href="/">
                Online Social University
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item" href='/'>
                    Home
                </a>
                <a className="navbar-item" href='/courses'>
                    Courses
                </a>
                <a className="navbar-item" href='/library'>
                    Library
                </a>
            </div>

            <div className="navbar-end">
            <div className="navbar-item">
                <div className="buttons">
                {!isAuth ? (
                    <><a className="button is-primary" href="/auth/signup">
                        <strong>Sign up</strong>
                    </a>
                    <a className="button is-light" href="/auth/login">
                        Log in
                    </a></>
                ) : (
                    <><a className="button is-light" href={"/user/"+user.id}>
                        My Account
                    </a>
                    <a className="button is-danger" onClick={logout}>
                        Log out
                    </a></>
                )}
                </div>
            </div>
            </div>
        </div>
        </nav>
    )
}