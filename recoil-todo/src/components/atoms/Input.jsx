import { useCallback } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil"
import { todoTitleFormState } from "../../Atom/TodoTitleFormAtom";

export const Input = () => {
    const todoTitleFormValue = useRecoilValue(todoTitleFormState);
    const setTodoTitleFormValue = useSetRecoilState(todoTitleFormState)

    const onChange = useCallback(
        (e) => {
            setTodoTitleFormValue(e.target.value);
        },
        [setTodoTitleFormValue]
    );

    return (
       <label>
      タスク名:
      <input
        type="text"
        value={todoTitleFormValue}
        onChange={onChange}
        name="title"
        style={{ margin: 12 }}
      />
    </label>
    )
}