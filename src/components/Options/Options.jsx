import s from "./Options.module.css"
import clsx from "clsx"


const Options = ({update, totalFeedback, clear}) => {
    return (
        <div className={s.options}>
            <button onClick={() => { update("good") }}  className={s.button}>Good</button>
            <button onClick={() => { update("neutral") }} className={s.button}>Neutral</button>
            <button onClick={() => { update("bad") }} className={s.button}>Bad</button>
            <button onClick={clear} className={clsx(totalFeedback ? s.button  : s.hidden)}>Reset</button>
        </div>
    )
}

export default Options