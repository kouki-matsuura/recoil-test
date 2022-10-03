import { useState } from "react"; 
import { useRecoilState} from "recoil";
import { todoListState } from "../../Atom/TodoList"
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";


export const Form = () => {
  return(
    <>
    <Input />
    <Button ></Button>
    </>
  ) 
}