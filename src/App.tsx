import { useState } from "react";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import { Task } from "./components/Task";

function App() {
  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <Task />
      </main>
    </div>
  );
}

export default App;
