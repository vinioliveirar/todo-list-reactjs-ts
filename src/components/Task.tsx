import { ChangeEvent, FormEvent, HtmlHTMLAttributes, useState } from "react";
import { v4 } from "uuid";
import { ListTaks } from "./ListTask";
import styles from "./Task.module.css";
import Clipboard from "../assets/Clipboard.svg";
import { FormCreateTask } from "./FormCreateTask";

export interface Task {
  id: string;
  content: string;
  completed: boolean;
}

export function Task() {
  const [tasks, setTaks] = useState<Task[]>([]);
  const [completedTask, setCompletedTask] = useState(0);

  function handleCreateNewTaks(task: Task) {
    setTaks([...tasks, task]);
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      if (task.completed) {
        setCompletedTask(completedTask - 1);
      }
      return task.content !== taskToDelete;
    });
    setTaks(tasksWithoutDeletedOne);
  }

  function handleCheckTask(id: string) {
    const newTaskList = tasks
      .map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }

        return task;
      })
      .sort((a, b) => Number(a.completed) - Number(b.completed));

    setTaks(newTaskList);
    const seeCompletedTasks = tasks.filter((task) => {
      return task.completed;
    });

    setCompletedTask(seeCompletedTasks.length);
  }

  return (
    <div className={styles.content}>
      <div className="input">
        <FormCreateTask onCreateTask={handleCreateNewTaks} />
      </div>

      <div className={styles.contentBox}>
        <header className={styles.taskHeader}>
          <p className={styles.created}>
            Tarefas criadas{" "}
            <span className={styles.counter}>{tasks.length}</span>
          </p>
          <p className={styles.done}>
            Concluidas{" "}
            <span className={styles.counter}>
              {completedTask} de {tasks.length}
            </span>
          </p>
        </header>

        {tasks.length === 0 ? (
          <div className={styles.empty}>
            <img src={Clipboard} alt="Clipboard" />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          <section className={styles.contentListTask}>
            {tasks.map((task) => {
              return (
                <ListTaks
                  key={task.id}
                  task={task}
                  onDeleteTask={deleteTask}
                  onCheckTask={handleCheckTask}
                  completedTaks={task.completed}
                />
              );
            })}
          </section>
        )}
      </div>
    </div>
  );
}
