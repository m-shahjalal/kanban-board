import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Column = ({ prefix, elements }) => {
    return (
        <div className="column">
            <h3 className="column-header">
                {prefix === 'todo' ? 'TODO' : prefix === 'inProgress' ? 'PROGRESS' : prefix === 'done' ? 'DONE' : ''}
            </h3>
            <Droppable  droppableId={`${prefix}`}>
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {elements.map((item, index) => (
                            <Task key={item.id} item={item} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default Column;
