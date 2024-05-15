export const ShowTask = ({ tasklist, setTasklist, task,
    setTask }) => {

    const handleEdit = (task) => {
        console.log(task);
        setTask(task);
    }
    const handleDelete = (id) => {
        let updatedList = tasklist.filter(t => t.id !== id);
        setTasklist(updatedList);
    }

    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{tasklist.length}</span>
                </div>
                <button className="clearAll" onClick={() => setTasklist([])}>Clear All</button>
            </div>
            <ul>
                {tasklist.map((task) => (
                    <li key={task.id}>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time}</span>
                        </p>
                        <i onClick={() => { handleEdit(task)}} className="bi bi-pencil-square"></i>
                        <i onClick={() => { handleDelete(task.id) }} className="bi bi-trash"></i>
                    </li>
                ))}
            </ul>
        </section>
    )
}
