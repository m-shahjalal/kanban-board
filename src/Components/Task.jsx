import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ item, index }) => {
    return (
        <Draggable draggableId={item.id} index={index}>
            {(provided, snapshot) => {
                return (
                    <div
                        className="task"
                        ref={provided.innerRef}
                        snapshot={snapshot}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <span>{item.content}</span>
                    </div>
                );
            }}
        </Draggable>
    );
};

export default Task;
