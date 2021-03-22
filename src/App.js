import React from "react";
import styles from "./App.module.scss";
import CreateNote from "./components/Create Note/createNote";
import Notes from "./components/Display Notes/notes";
import { useSelector, useDispatch } from "react-redux";
import { AppBar, Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import inputActions from "./redux/actions/inputActions";

function App() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);

  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setInputTitle(item.title));
    dispatch(inputActions.setInputContent(item.content));
  };

  return (
    <div className={styles.container}>
      <AppBar style={{ backgroundColor: "#000" }}>
        <Toolbar>
          <Typography variant='h5'>Session Notes</Typography>
        </Toolbar>
      </AppBar>
      <div className={styles.innerContainer}>
        <CreateNote />
        {notes.length === 0 ? (
          <div className='noNoteDiv'>
            <Typography
              variant='subtitle2'
              align='center'
              color='textSecondary'
              style={{ marginTop: "2rem" }}
            >
              There are no Notes yet, Add one ...
            </Typography>
          </div>
        ) : (
          ""
        )}
        {notes.length > 0 && (
          <div style={{ margin: "1rem 0" }}>
            <span
              style={{
                fontSize: "1.5rem",
                color: "grey",
              }}
            >
              Notes
            </span>
            <div
              style={{
                overflow: "scroll",
                flex: "1",
                height: "64vh",
                overflowX: "hidden",
              }}
            >
              {notes.map((item, index) => {
                return (
                  <Notes
                    key={index}
                    title={item.title}
                    note={item.content}
                    onItemClicked={() => {
                      onItemClicked(item, index);
                    }}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
