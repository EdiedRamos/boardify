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
      id: 2,
      name: "Tareas del proyecto",
      taskGroupList: [
        {
          id: 2,
          status: "Pendiente",
          taskList: [
            {
              id: 2,
              title: "Investigar mercado",
              description:
                "Realizar un estudio de mercado para identificar oportunidades",
              status: { id: 2, status: "Pendiente" },
              subtaskList: [
                {
                  id: 4,
                  title: "Buscar datos de mercado",
                  state: false,
                },
                {
                  id: 5,
                  title: "Analizar competencia",
                  state: false,
                },
                {
                  id: 6,
                  title: "Identificar segmentos de mercado",
                  state: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Lista de pendientes",
      taskGroupList: [
        {
          id: 3,
          status: "Urgente",
          taskList: [
            {
              id: 3,
              title: "Pagar facturas",
              description: "Realizar el pago de las facturas vencidas",
              status: { id: 3, status: "Urgente" },
              subtaskList: [
                {
                  id: 7,
                  title: "Factura de luz",
                  state: true,
                },
                {
                  id: 8,
                  title: "Factura de teléfono",
                  state: false,
                },
                {
                  id: 9,
                  title: "Factura de agua",
                  state: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Proyecto de investigación",
      taskGroupList: [
        {
          id: 4,
          status: "En progreso",
          taskList: [
            {
              id: 4,
              title: "Recopilar datos",
              description: "Recolectar datos para el análisis",
              status: { id: 4, status: "En progreso" },
              subtaskList: [
                {
                  id: 10,
                  title: "Entrevistas",
                  state: true,
                },
                {
                  id: 11,
                  title: "Encuestas",
                  state: false,
                },
                {
                  id: 12,
                  title: "Análisis de datos secundarios",
                  state: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Planificación de eventos",
      taskGroupList: [
        {
          id: 5,
          status: "Próximo evento",
          taskList: [
            {
              id: 5,
              title: "Organizar logística",
              description: "Planificar la logística para el próximo evento",
              status: { id: 5, status: "Próximo evento" },
              subtaskList: [
                {
                  id: 13,
                  title: "Reservar lugar",
                  state: false,
                },
                {
                  id: 14,
                  title: "Contratar catering",
                  state: false,
                },
                {
                  id: 15,
                  title: "Enviar invitaciones",
                  state: true,
                },
              ],
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
