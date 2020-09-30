import {combineReducers} from 'redux'
import notes from './notesReducer'
import input from './inputReducer'

export default combineReducers({
    notes,
    input
})