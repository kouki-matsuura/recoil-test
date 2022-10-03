import { selector } from "recoil";

import { todoListState } from "../Atom/TodoList";
import { todoSearchForm } from "../Atom/TodoSearchForm";

export const ToDoListSelector = selector (
    {
        key: "searchedTodoListSelector",
        get: ({ get }) => {
            const todoList = get(todoListState);
            const searchText = get(todoSearchForm);
            return searchText ? todoList.filter((t) => t.title.includes(searchText)) : todoList;
        }
    }
)