
import { AddTask, TodoList } from "./components";
import { getAllTodos } from "@/api";

export default async function Home() {
  const tasks = await getAllTodos();
  return (
    <main className="max-w-[1600px] mx-auto mt-4 h-full relative px-32">
      <div className="text-center my-4 flex flex-col gap-4">
        <h1 className='text-2xl font-bold'>To Do List App</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}
