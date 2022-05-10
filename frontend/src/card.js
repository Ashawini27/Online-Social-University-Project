export default function Card({ course }) {
    const keyPress = () => {
        // return new KeyboardEvent('keydown', { key: 'p', ctrlKey: true })
        window.print()
    }
    return (
        <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
            <img src={course.image} alt="Placeholder image" />
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
            <div className="media-content">
                <p className="title is-4">{ course.title }</p>
                <p className="subtitle is-6">@{course.instructor}</p>
            </div>
            </div>

            <div className="content">
            { course.description }
            <br />  
            </div>
        </div>
        <footer className="card-footer">
            <a href="#" className="card-footer-item" onClick={keyPress}>Start Learning</a>
            <a href="#" className="card-footer-item">Leave</a>
        </footer>
        </div>
    )
}