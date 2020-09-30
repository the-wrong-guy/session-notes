import React from 'react';
import './App.scss';
import CreateNote from './components/Create Note/createNote'
import Notes from './components/Display Notes/notes';
import {useSelector,useDispatch} from 'react-redux'
import Typography from '@material-ui/core/Typography'
import inputActions from './redux/actions/inputActions';

function App() {
  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes.notes)
  console.log(notes)

  const onItemClicked = (item,index) =>{
    dispatch(inputActions.setInputId(index))
    dispatch(inputActions.setInputTitle(item.title))
    dispatch(inputActions.setInputContent(item.content))
    console.log("clciked")
  }

  return (
    <div className="App">
      <header className="App-header">
      <CreateNote/>
      {notes.length === 0 ? (  <div className="noNoteDiv">
      <Typography variant="subtitle1" color="initial">There's no Notes yet.Please add one...</Typography>
        </div>):('')}
      {
        notes.map((item,index)=>{
          if(item){
            return(
              <Notes title={item.title}  note={item.content} onItemClicked={()=>{
                onItemClicked(item,index)
              }}  />
            )
          }
          return null
        })
      }
      </header>
    </div>
  );
}

export default App;
