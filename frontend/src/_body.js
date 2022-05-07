// https://www.educationunlimited.com/blog/wp-content/uploads/2019/08/Webp.net-compress-image.jpg
import bodyStyle from '../styles/Body.module.css'
import Image from 'next/image'
import background from '../public/background.png'

export default function Body() {
    return (
        <section className={"section is-large "+bodyStyle.main}>
            <Image src={background} width="50" height="50" className={bodyStyle.img} alt="">
            </Image>
            <div className={bodyStyle.shadow}></div>
            <h1 className={"title "+bodyStyle.title_text}>Welcome to</h1>
            <h2 className={"subtitle "+bodyStyle.subtitle_text}>Online Social University</h2>
            <button className={"button is-primary is-rounded is-normal "+bodyStyle.course}>Check Out Courses</button>
        </section>
    )
}