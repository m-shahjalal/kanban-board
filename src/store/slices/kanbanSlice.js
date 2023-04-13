import { createSlice } from '@reduxjs/toolkit';

const removeFromList = (list, index) => {
    const result = Array.from(list); // copy the list
    const removed = result.splice(index, 1)[0];
    return [removed, result];
};
const addToList = (list, index, element) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
};

const stateFromLocalStorage = JSON.parse(localStorage.getItem('kanban') || '{}');

const initialState = {
    todo: stateFromLocalStorage.todo || [],
    inProgress: stateFromLocalStorage.inProgress || [],
    done: stateFromLocalStorage.done || [],
};

export const kanbanSlice = createSlice({
    name: 'kanban',
    initialState,
    reducers: {
        addToTheList: (state, {payload}) => {
            const item = {
                id: Date.now().toString(36),
                prefix: 'todo',
                content: payload
            }
            state.todo.push(item);
        },
        handleDrug: (state, { payload }) => {
            const { source, destination } = payload;
            // dropped outside the list
            if (!destination) return;

            // copy the data
            const data = Object.assign({}, state);

            // remove from source
            const srcCol = data[source.droppableId];
            const [removeElm, newSrcList] = removeFromList(srcCol, source.index);

            // add to destination
            data[source.droppableId] = newSrcList;
            const destinationList = data[destination.droppableId];
            data[destination.droppableId] = addToList(destinationList, destination.index, removeElm);

            // update the state
            state.todo = data.todo;
            state.inProgress = data.inProgress;
            state.done = data.done;
        },
    },
});

// Action creators are generated for each case reducer function
export const {addToTheList, handleDrug } = kanbanSlice.actions;

export default kanbanSlice.reducer;
