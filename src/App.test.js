import App from './App';
import Header from './feature/Header';
import { useTodoContext } from '../src/feature/TodoController';
// import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// import react-testing methods
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import { act } from "react-dom/test-utils";
import Checklist from './feature/Checklist';


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  container.remove();
  container = null;
});

test('renders learn react link', () => {
  act(() => {
    render(<App />, container);
  });
  expect(container.textContent).toBeDefined;
});

// jest.mock("../src/feature/TodoController", () => {
//   return {
//     useTodoContext: () => {
//       return {
//         todoList: [
//               {title:"test1",isDone:true,isFav:false},
//               {title:"test2",isDone:false,isFav:false},
//               {title:"test3",isDone:true,isFav:true},
//         ],
//         taskInput: "",
//         hideComplete: false,
//         onHideComplete: jest.fn(),
//         onDelete: jest.fn(),
//         onEdit: jest.fn(),
//         onClickFavorite: jest.fn(),
//         onClickDone: jest.fn(),
//         getData: jest.fn(),
//       };
//     },
//   };
// });

// it("something", ()=>{
//   const div = document.createElement("div");
//   ReactDOM.render(<Checklist></Checklist>, div);
// })


