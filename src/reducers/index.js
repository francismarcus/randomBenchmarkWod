import { combineReducers } from 'redux';

const reducer = () => {
    return [
        { name: 'Grade', excercises: 'Clean & Jerk' },
        { name: 'Isabel', exercises: 'Snatch'}
    ]
}
const selected = (selected=null, action) => {
    if (action.type === 'SELECTED') {
        return action.payload;
    }
    return selected;
}

export default combineReducers({
    reducer: reducer,
    selected: selected
});
