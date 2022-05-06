// https://www.educationunlimited.com/blog/wp-content/uploads/2019/08/Webp.net-compress-image.jpg
import bodyStyle from '../styles/Body.module.css'

export default function Body() {
    return (
        <section className={"section is-large "+bodyStyle.main}>
            <img src="https://assets.teenvogue.com/photos/5e66a34f7ac2c30008a4819d/16:9/w_2560%2Cc_limit/GettyImages-1062799214.jpg" className={bodyStyle.img} alt=""/>
            <div className={bodyStyle.shadow}></div>
            <h1 className={"title "+bodyStyle.title_text}>Welcome to</h1>
            <h2 className={"subtitle "+bodyStyle.subtitle_text}>Online Social University</h2>
            <button class="button is-primary is-rounded is-normal">Check Out Courses</button>
        </section>
    )
}