import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_TODO } from "../framework/graphql/mutation_todoQuery/Query";

export function AddTodo_Mutation() {
  const [title, setTitle] = useState("");

  const [createTodo, { data, loading, error }] = useMutation(ADD_TODO);

  if (loading) return <p>'Submitting...'</p>;
  if (error) return <p>Submission error!</p>;
    console.log(data?.createTodo)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void =>  { 
      e.preventDefault();
    if (!title.trim()) {
      return;
    }
    createTodo({
      variables: { title: title, completed: true },
    });
    
    setTitle("");
  }
    
  return (
    <div>
      <h1>Mutation</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button type="submit">Add Todo</button>
        {data && <p>Mutation Data:-- {data.createTodo.title}</p>}
      </form>
    </div>
  );
  }

