import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Body from '../src/_body';
import Nav from '../src/_nav'

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
  },[])
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | OSU</title>
      </Head>
      <Nav isAuth={isAuth} user={user} />
      <Body />
    </div>
  )
}
