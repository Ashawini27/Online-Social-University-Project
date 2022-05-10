import Card from "../src/card"
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Nav from '../src/_nav'
import Head from 'next/head';

const courseData = [
    {
        id: 1,
        title: "Intro to Programming",
        description: "This course is designed to give you a basic understanding of programming concepts and how to write code in a language of your choice.",
        image: "https://images-na.ssl-images-amazon.com/images/I/61nYB9dLSvL.jpg",
        instructor: "James A. Hanapel",
    }, {
        id: 2,
        title: "Introduction to Python",
        description: "This course is designed to give you a basic understanding of programming concepts and how to write code in Python Programing language.",
        image: "https://images-eu.ssl-images-amazon.com/images/I/41-W3W0t02L._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
        instructor: "Reema Thareja",
    }, {
        id: 3,
        title: "Introduction to Java",
        description: "This course is designed to give you a basic understanding of programming concepts and how to write code in Java Programing language.",
        image: "https://m.media-amazon.com/images/P/0596009208.01._SCLZZZZZZZ_SX500_.jpg",
        instructor: "Bert Bates",
    }, {
        id: 4,
        title: "Introduction to C++",
        description: "This course is designed to give you a basic understanding of programming concepts and how to write code in C++ Programing language.",
        image: "https://m.media-amazon.com/images/I/41RL+jywlqL.jpg",
        instructor: "Cay S. Horstmann",
    }
]

const Courses = () => {
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
            <title>Courses | OSU</title>
        </Head>
        <Nav isAuth={isAuth} user={user} />
        <section className="section"> 
            <div className="container">
                <h1 className="title">Courses</h1>
                <div className="columns is-multiline">
                    {courseData.map(course => (
                        <div className="column is-one-quarter" key={course.id}>
                            <Card course={course} key={course.id} />
                        </div>   
                    ))}
                </div>
            </div>
        </section>
    </div>
    )
}


export default Courses