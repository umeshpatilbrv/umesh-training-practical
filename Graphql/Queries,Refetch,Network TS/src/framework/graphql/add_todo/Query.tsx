import { gql } from "@apollo/client";

export interface AddTodoData {
    addTodo: {
      id: number;
      title: string;
      completed: boolean;
    };
  }
  
  export interface AddTodoVars {
    title: string;
    completed:boolean
  }
  

  export const ADD_TODO = gql`
  mutation Todo($title:String!,$completed:Boolean!)
  {
    createTodo(input:{
      title:$title
      completed:$completed
    })
    {
      title
      completed
    }
    
  }
  `;
  