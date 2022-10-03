import { useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil"
import { todoSearchForm } from "../../Atom/TodoSearchForm";

export const ToDoSearchForm = () => {
    const searchTextFormValue = useRecoilValue(todoSearchForm);
    const setSearchTextFormValue = useSetRecoilState(todoSearchForm);

    const onChange = useCallback(
        (e) => {
            setSearchTextFormValue(e.target.value);
        },
        [setSearchTextFormValue]
    );

    return (
        <label>
            検索：
            <input
            type="text"
            vlaue={searchTextFormValue}
            onChange={onChange}
            name='title'
            />
        </label>
    )

}