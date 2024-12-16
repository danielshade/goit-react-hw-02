import s from "./Notification.module.css"

const Notification = ({totalFeedback}) => {
    return (
        <p className={s.tetx}>{ !totalFeedback ? `No feedback yet` : `` }</p>
    )
}

export default Notification