import type { DashboardType } from "@/Types";

export const DashboardMock: DashboardType = {
  boardList: [
    {
      id: 1,
      name: "Mi semana",
      taskGroupList: [
        {
          id: 1,
          status: "Lunes",
          taskList: [
            {
              id: 1,
              title: "Actualizar cv",
              description: "Mejorar el cv para buscar un nuevo empleo",
              status: { id: 1, status: "Lunes" },
              subtaskList: [
                {
                  id: 1,
                  title: "quitar la foto",
                  state: false,
                },
                {
                  id: 2,
                  title: "actualizar la paleta de colores",
                  state: false,
                },
                {
                  id: 3,
                  title: "actualizar la experiencia",
                  state: true,
                },
              ],
            },
            {
              id: 2,
              title: "Estudiar nodejs",
              description:
                "Repasar nodejs para volver a crear servicios / backend",
              status: { id: 1, status: "Lunes" },
              subtaskList: [
                {
                  id: 1,
                  title: "lo basico",
                  state: true,
                },
                {
                  id: 2,
                  title: "intermedio",
                  state: false,
                },
                {
                  id: 3,
                  title: "eventos",
                  state: true,
                },
              ],
            },
          ],
        },
        {
          id: 22,
          status: "Martes",
          taskList: [
            {
              id: 33,
              title: "preparar sancocho",
              description: "hacer un buen sancocho",
              status: { id: 33, status: "Martes" },
              subtaskList: [],
            },
          ],
        },
      ],
    },
    {
      id: 55,
      name: "Un board vacio",
      taskGroupList: [],
    },
  ],
};
