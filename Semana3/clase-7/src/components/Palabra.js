import React from "react"
import styles from "../styles/Palabra.module.css"
function Palabra (props){
    return (
        <React.Fragment>
            <h1 className={styles.text}> {props.palabra} </h1>
        </React.Fragment>
    )
}

export default Palabra