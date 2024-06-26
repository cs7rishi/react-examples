export const AddTask = ({ tasklist, setTasklist, task,
    setTask }) => {
    function handleSubmit(e) {
        e.preventDefault();

        const date = new Date();

        if (task.id) {
            const updateList = tasklist.map(
                todo => (todo.id === task.id ? { id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : todo))
            setTasklist(updateList);
            setTask({});
        } else {
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }

            setTasklist([...tasklist, newTask])
            setTask({});
        }
    }
    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={task.name || ""} autoComplete="off" placeholder="add task" onChange={(e)=>setTask({...task, name: e.target.value})}/>
                <button type="submit">{task.id ? "Update":"Add"}</button>
            </form>
        </section>
    )
}
