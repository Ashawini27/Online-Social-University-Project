import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Body from './_body';
import Nav from './_nav'

export default function Home() {
  const [isAuth, setIsAuth] = useState();
  const [user, setUser] = useState();
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('user');
    if(isAuthenticated) {
      setIsAuth(true);
      setUser(JSON.parse(isAuthenticated));
    }else {
      setIsAuth(false);
    }
  })
  return (
    <div className={styles.container}>
      <Nav isAuth={isAuth} user={user} />
      <Body />
    </div>
  )
}
