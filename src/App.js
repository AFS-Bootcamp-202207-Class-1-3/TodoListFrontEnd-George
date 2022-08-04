import "./App.css";
import TodoList from "./features/todo/TodoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./features/layout/Layout";
import About from "./features/pages/About";
import DoneItem from "./features/todo/DoneItem";
import NotFound from "./features/pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<TodoList />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/todo/done" element={<DoneItem />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
