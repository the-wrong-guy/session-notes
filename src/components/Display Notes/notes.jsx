import React from 'react'
import {Paper, Typography} from '@material-ui/core'
import styles from './notes.module.scss'
const Notes = ({title,note,onItemClicked}) => {
    return (
        <div className={styles.paperDiv}>
            <Paper onClick={onItemClicked} className={styles.paper} elevation={3}>
                <Typography className={styles.title} variant="h6" color="initial">{title}</Typography>
                <Typography className={styles.note} variant="subtitle2" color="initial">{note}</Typography>
            </Paper>
        </div>
    )
}

export default Notes
