// import '../styles/globals.css'
import loginStyle from '../../styles/Login.module.css'
import Image from 'next/image'
import profilePic from '../../public/logoipsum-logo-64.svg'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  
  const router = useRouter();
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('user');
    if(isAuthenticated) {
      router.push('/')
    }
  },[])

  const handleSubmit = async (e) => {
    console.log(email, password)
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)
    const user = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        content_type: "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.success) {
        setSuccess(true)
        setLoading(false)
        localStorage.setItem('user', JSON.stringify({name: data.data.name, email: data.data.email, id: data.data._id}))
        setTimeout(() => {
          window.location.href = '/'
        }, 1000)
      } else {
        setError(data.message)
        setLoading(false)
      }
    }
    )
    .catch(err => {
      console.log(err)
      setError('Something went wrong')
      setLoading(false)
    })
  }
  const eraseMessages = () => {
    setError('');
    setSuccess(false);
  }
  return (
    <section className={'hero is-fullheight '+ loginStyle.center}>
      <div className="hero-body has-text-centered">
        <div className="login">
          <Image src={profilePic} width="325px" />
          <form>
            <div className="field">
              <div className="control">
                <input className="input is-medium is-rounded" name='email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="hello@example.com" required />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input className="input is-medium is-rounded" name='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="**********"  required />
              </div>
            </div>
            <br />
            <button className="button is-block is-fullwidth is-primary is-medium is-rounded" onClick={handleSubmit}>
              Login
            </button>
          </form>
          <br/>
          {error &&
            <div className="notification is-danger">
              <button className="delete" onClick={eraseMessages}></button>
              <strong>{error}</strong>
            </div>
          }
          {success &&
            <div className="notification is-success">
              <button className="delete" onClick={eraseMessages}></button>
              <strong>Login Success full Redirecting...</strong>
            </div>
          }
          <nav className="level">
            <div className="level-item has-text-centered">
              <div>
                <a href="/auth/signup">Create an Account</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section> 
  )
}

export default Login;
