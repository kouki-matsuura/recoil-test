import { useRecoilValue, useSetRecoilState } from "recoil"
import { todoListState } from "../../Atom/TodoList"
import { todoTitleFormState } from "../../Atom/TodoTitleFormAtom";

export const Button = () => {
    const todoList = useRecoilValue(todoListState);
    const todoTitleFormValue = useRecoilValue(todoTitleFormState);
    const setTodoTitleFormValue = useSetRecoilState(todoTitleFormState)
    const setTodoList = useSetRecoilState(todoListState);

    const addTodo = () => {
        setTodoList((oldTodo) => [
            ...oldTodo,
            {
                id: todoList.length,
                title: todoTitleFormValue,
                isComplete: false
            }
        ])
        setTodoTitleFormValue("");

    }
    return (
    <button type="button" onClick={addTodo}>追加</button>
    )
}