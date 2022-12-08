import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 } from "uuid";
import styles from "./FormCreateTask.module.css";
import { Task } from "./Task";

interface InputProps {
  onCreateTask: (task: Task) => void;
}
export function FormCreateTask({ onCreateTask }: InputProps) {
  const [newTaskText, setNewTaskText] = useState("");

  function CreateTask(event: FormEvent) {
    event.preventDefault();
    onCreateTask({ id: v4(), content: newTaskText, completed: false });
    setNewTaskText("");
  }
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  return (
    <form onSubmit={CreateTask} className={styles.input}>
      <input
        type="text"
        value={newTaskText}
        placeholder="Adicionar uma nova tarefa"
        onChange={handleNewTaskChange}
      />
      <button type="submit">
        Criar <PlusCircle size={20} />{" "}
      </button>
    </form>
  );
}
