import type { IBoard } from "@/Types";

export const BoardMock: IBoard[] = [
  {
    status: "TODO",
    taskList: [
      {
        title: "Ver naruto",
        text: "195 de 220 capitulos",
      },
      {
        title: "Aprender next",
        text: "3 de 220 tareas",
      },
      {
        title: "Preparar desayuno",
        text: "0 de tareas",
      },
      {
        title: "Preparar desayuno",
        text: "0 de tareas",
      },
      {
        title: "Preparar desayuno",
        text: "0 de tareas",
      },
      {
        title: "Preparar desayuno",
        text: "0 de tareas",
      },
    ],
  },
  {
    status: "DOING",
    taskList: [
      {
        title: "Limpiar la casa",
        text: "0 de 5 tareas",
      },
      {
        title: "Ir al gimnasio",
        text: "1 de 3 tareas",
      },
      {
        title: "Hacer la compra",
        text: "0 de 8 tareas",
      },
    ],
  },
];
