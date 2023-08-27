import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        const {
            items,
            updateTodosToShow,
            clearList,
            handleDelete,
            handleEdit,
            handleDoneTask,
            handleDeleteDoneTasks
        } = this.props

        return (
            <Fragment>
                <h3 className="text-center custom-font">TodoList</h3>


                <div className="row">
                    <div className="d-grid gap-2 col-4 mx-auto">
                        <button
                            type="button"
                            className="btn btn-info .btn-block btn-primary"
                            onClick={() => updateTodosToShow("all")}
                        >
                            All
                        </button>
                    </div>
                    <div className="d-grid gap-2 col-4 mx-auto">
                        <button
                            type="button"
                            className="btn btn-info btn-block btn-primary"
                            onClick={() => updateTodosToShow("done")}
                        >
                            Done
                        </button>
                    </div>
                    <div className="d-grid gap-2 col-4 mx-auto">
                        <button
                            type="button"
                            className="btn btn-info .btn-block btn-primary"
                            onClick={() => updateTodosToShow("todo")}
                        >
                            Todo
                        </button>
                    </div>
                </div>

                {items.length === 0 ? (
                    ''
                ) : (
                    <ul className="list-group my-5">
                        {items.map(item => (
                            <TodoItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                completed={item.completed}
                                handleDelete={() => handleDelete(item.id)}
                                handleEdit={() => handleEdit(item.id)}
                                handleDoneTask={handleDoneTask}
                            />
                        ))}

                        <div className="row mt-4">
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button
                                    type="button"
                                    className="btn btn-danger .btn-block btn-primary"
                                    onClick={handleDeleteDoneTasks}
                                >
                                    Delete done tasks
                                </button>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button
                                    type="button"
                                    className="btn btn-danger .btn-block btn-primary"
                                    onClick={clearList}
                                >
                                    Delete all tasks
                                </button>
                            </div>
                        </div>
                    </ul>
                )}
            </Fragment>
        )
    }
}
