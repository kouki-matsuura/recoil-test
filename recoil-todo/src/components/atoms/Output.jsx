import { useRecoilValue } from "recoil"
import { ToDoListSelector } from "../../Selector/ToDoListSelector";

export const Output = () => {
    const todoList = useRecoilValue(ToDoListSelector);
    return (
        <>
            <h3>この下に表示される</h3>
            {todoList.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}

        </>
    )
}