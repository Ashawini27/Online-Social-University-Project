import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Head from 'next/head';

const styles = {
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#16165a',
    },
    box: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
        background: '#fff',
    },
    cert: {
        fontSize: '10.5rem !important',
        marginTop: '-390px',
    }
}

const Generate = ({}) => {
    const router = useRouter();
    const [course, setCourse] = useState();
    const [user, setUser] = useState();
    useEffect(()=> {
        setCourse(router.query.courseName);
        const isAuthenticated = localStorage.getItem('user');
        if(isAuthenticated) {
            setUser(JSON.parse(isAuthenticated));
        }else {
            router.push('/');
        }
    },[])

    return (
        <>
        <Head>
            <title>{course} | OSU</title>
        </Head>
        <div style={styles.container}>
            <div style={styles.box}>
                <h1 className="title is-size-1" style={styles.cert}>Certificate</h1>
                <p className='is-size-3'>Certificate for {user && <strong>{user.name}</strong>}</p>
                <h3 className='is-size-2'>{course}</h3>
            </div>
        </div>
        </>
    )
}

export default Generate;