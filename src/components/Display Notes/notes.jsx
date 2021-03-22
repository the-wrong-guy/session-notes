import React from "react";
import { Paper, Typography } from "@material-ui/core";
import styles from "../Create Note/mainPage.module.scss";
const Notes = ({ title, note, onItemClicked }) => {
  const randomColorsGenerator = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };
  return (
    <div className={styles.paperDiv}>
      <Paper
        onClick={onItemClicked}
        style={{
          cursor: "pointer",
          margin: "15px 0",
          display: "grid",
          gap: "10px",
        }}
        className={styles.paper}
        elevation={5}
      >
        <Typography
          style={{ color: `#${randomColorsGenerator()}`, fontWeight: "600" }}
          className={styles.title}
          variant='h6'
          color='initial'
        >
          {title}
        </Typography>
        <Typography
          style={{ wordBreak: "break-word", color: "#707070" }}
          className={styles.note}
          variant='subtitle2'
          color='initial'
          paragraph
        >
          {note}
        </Typography>
      </Paper>
    </div>
  );
};

export default Notes;
