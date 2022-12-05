import { useState } from "react";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import { Task } from "./components/Task";

function App() {
  return (
    <div>
      <Header />
      <div>
        <main className={styles.wrapper}>
          <Task />
        </main>
      </div>
    </div>
  );
}

export default App;
