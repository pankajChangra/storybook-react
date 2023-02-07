import React from 'react';

const Task = (props: {id: string, title: string, state: string}) => {
    const {title} = props;
    return (
        <div className="list-item">
            <label htmlFor="title" aria-label={title}>
            <input type="text" value={title} readOnly={true} name="title" />
            </label>
        </div>
    );
}

export default Task;
