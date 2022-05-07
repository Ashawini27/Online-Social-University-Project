import navStyle from '../styles/Nav.module.css'
import Link from 'next/link'

export default function Nav({isAuth, user}) {
    const logout = () => {
        localStorage.setItem('user', '');
        window.location.href = '/';
    }
    return (
        <nav className={"navbar "+navStyle.navbar_width} role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            
            <Link href="/">
            <a className="navbar-item has-text-weight-bold">
                Online Social University
            </a>
            </Link>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <Link href='/'>
                <a className="navbar-item">
                    Home
                </a>
                </Link>
                
                <Link className="navbar-item" href='/courses'>
                <a className="navbar-item">
                    Courses
                </a>
                </Link>
                
                <Link className="navbar-item" href='/library'>
                <a className="navbar-item">
                    Library
                </a>
                </Link>
            </div>

            <div className="navbar-end">
            <div className="navbar-item">
                <div className="buttons">
                {!isAuth ? (
                    <>
                    <Link href="/auth/signup">
                    <a className='button is-primary is-rounded is-normal'>
                        <strong>Sign up</strong>
                    </a>
                    </Link>
                    
                    <Link href="/auth/login">
                    <a className="button is-light  is-rounded is-normal">Log in</a>
                    </Link>
                    </>
                ) : (
                    <><Link className="button is-light" href={"/user/"+user.id}>
                        <a className='button is-light'>
                        My Account
                        </a>
                    </Link>
                    <a className="button is-danger" onClick={logout}>
                        Log out
                    </a>
                    </>
                )}
                </div>
            </div>
            </div>
        </div>
        </nav>
    )
}