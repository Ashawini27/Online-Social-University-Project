import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css'
import Nav from '../../src/_nav'
import Head from 'next/head';

const lineStyle = {
    border: '1px solid #000',
    display: 'block',
}

const stylesNew = {
    select: {
        width: '100%',
        height: '100px',
        display: 'flex',
        justifyContent: 'space-between',
    }
}

const Tab = ({ title, type, data }) => {
    const router = useRouter();
    const [course, setCourse] = useState(data[0]);
    
    const handleSubmit = (e) => {
        const path = `/generatecert/${course}`;
        router.push(path);
    }

    return (
        <div className='column'>
            <h1 className="title">{title}</h1>
            {
                type == 3 ?
                <div>
                    <div className="control" style={stylesNew.select}>
                        <label className='is-text is-size-4'>Select the Course</label>
                        <div className="select">
                            <select value={course} onChange={(e) => setCourse(e.target.value)}>
                                {data.map((course, index) => {
                                    return <option key={index} value={course}>{course}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="control">
                        <button className="button is-primary" onClick={handleSubmit}>Generate Certificate</button>
                    </div>
                </div>
                : <p>Hellssss</p>
            }
        </div>
    )
}

const User = () => {
  const [isAuth, setIsAuth] = useState();
  const [user, setUser] = useState();
  const [name, setName] = useState();
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('user');
    if(isAuthenticated) {
      setIsAuth(true);
      setName(JSON.parse(isAuthenticated).name);
      setUser(JSON.parse(isAuthenticated));
    }else {
      setIsAuth(false);
    }
  },[])
  return (
    <div className={styles.container}>
        <Head>
            <title>{name} | OSU</title>
        </Head>
        <Nav isAuth={isAuth} user={user} />
        {
            isAuth &&
            <section className="section"> 
            <div className="container">
                <h1 className="title">Account Settings</h1>
                <div className="columns">
                    <div className="column is-one-third">
                        <h1 className="title">{user.name}</h1>
                        <h2 className="subtitle">{user.email}</h2>
                        <aside className="menu">
                        <p className="menu-label">
                            General
                        </p>
                        <ul className="menu-list">
                            <li><a>My Books</a></li>
                            <li><a>My Courses</a></li>
                        </ul>
                        <p className="menu-label">
                            Administration
                        </p>
                        <ul className="menu-list">
                            <li><a className='is-active'>Get Certificate</a></li>
                        </ul>
                        </aside>
                    </div>
                    <div style={lineStyle}></div>
                    <Tab type={3} title="My Certificate" data={['Software Diploma', 'Python Master Class']} />
                </div>
            </div>
        </section>
        }
    </div>
    )
}

export default User