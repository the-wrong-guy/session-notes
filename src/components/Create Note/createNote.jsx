import React, {useEffect,useRef } from 'react'
import {Typography, AppBar, Toolbar,Paper,Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import styles from './mainPage.module.scss'
import noteActions from '../../redux/actions/noteAction'
import inputActions from '../../redux/actions/inputActions'
import {useDispatch,useSelector} from 'react-redux'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height:20,
    width : "6px",
    padding: '0 30px',
    fontSize : "13px",
    marginTop:"15px"
  },
  label: {
    textTransform: 'capitalize',
  },
});

const CreateNote = () =>{
    const classes = useStyles();
    const textareaRef = useRef(null);
    // reudx
    const id = useSelector(state=>state.input.id)
    const title = useSelector(state=>state.input.title)
    const content = useSelector(state=>state.input.content)
    const dispatch = useDispatch()

    // Button Click handling
    const handleAddButtonClick = () =>{
      if(title&&content){

      dispatch(noteActions.addNote({
        title,
        content
      }))

      dispatch(inputActions.resetInputs())
    }
    }

    const updateNote = () =>{
      if(title&&content){
        dispatch(noteActions.updateNote(id,{
          title,content
        }))
        dispatch(inputActions.resetInputs())
      }
    }

    const deleteNote = () =>{
      dispatch(noteActions.deleteNote(id))
      dispatch(inputActions.resetInputs())
    }

    useEffect(() => {
        textareaRef.current.style.height = "0px";
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = scrollHeight + "px";
    }, [content]);
    return(
        <div>
            <div>
             <AppBar  position="sticky" style={{backgroundColor:"#000"}}>
               <Toolbar>
                 <Typography variant="h5">
                   Temp Session Notes
                 </Typography>
               </Toolbar>
             </AppBar>
            </div>
            <div className={styles.paperDiv}>
                <Paper elevation={10} className={styles.paper}>
                    <input className={styles.input} type='text' value={title} onChange={e=>dispatch(inputActions.setInputTitle(e.target.value))}  placeholder="Title" />
                    <textarea  ref={textareaRef} className={styles.textarea} value={content}   type="text" onChange={e=>dispatch(inputActions.setInputContent(e.target.value))} placeholder="Add note..."></textarea>
                    <Button classes={{
                      root: classes.root,
                      label: classes.label, 
                    }}
                    onClick={id === -1 ? (handleAddButtonClick) : (updateNote)}
                    >{id === -1 ? "Add" : "Update"}</Button>
                    
                    {id === -1 ? ('') : (<><Button
                      onClick={deleteNote} 
                      classes={{
                        root: classes.root,
                        label: classes.label, 
                      }} style={{marginLeft: "10px"}}>Delete</Button></>) }
                </Paper>
            </div>
        </div>
    )
}

export default CreateNote