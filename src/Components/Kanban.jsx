import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { handleDrug } from '../store/slices/kanbanSlice';
import Column from './Column';
import { useSelector } from 'react-redux';

const Kanban = () => {
    const dispatch = useDispatch();
    const lists = ['todo', 'inProgress', 'done'];
    const kanban = useSelector((state) => state.kanban);
    
    return (
        <div className="kanban">
            <DragDropContext onDragEnd={(result) => dispatch(handleDrug(result))}>
                {lists.map((listKey) => (
                    <Column elements={kanban[listKey]} key={listKey} prefix={listKey} />
                ))}
            </DragDropContext>
        </div>
    );
};

export default Kanban;

{
    /* <div className="kanban">
    <Column title="TODO" id="todo" />
    <Column title="PROGRESS" id="progress" />
    <Column id="done" title="DONE" />
</div> */
}
