import { Output } from "../components/atoms/Output"
import { Form } from "../components/molecules/Form"
import { ToDoSearchForm } from "../components/molecules/ToDoSearchForm"

export const Todo = () => {
    return(
        <>
          <Form />
          <ToDoSearchForm/>
          <Output />
        </>
    )
}