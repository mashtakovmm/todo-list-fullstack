import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TodoItemType, APIResponseType } from "../types";

export const tasksApi = createApi({
    reducerPath: 'tasksApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1/tasks' }),
    tagTypes: ['Task'],
    endpoints: (builder) => ({
        getAllTasks: builder.query<APIResponseType, void>({
            query: () => '/',
            providesTags: ['Task']
        }),
        addTask: builder.mutation<void, Partial<TodoItemType>>({
            query: (data) => ({
                url: '/',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Task']
        }),
        deleteTask: builder.mutation<void, string>({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Task']
        }),
        patchTask: builder.mutation<void, Partial<TodoItemType>>({
            query: (task) => ({
                url: `/${task._id}`,
                method: 'PATCH',
                body: task
            }),
            invalidatesTags: ['Task']
        })
    })
})

export const {
    useGetAllTasksQuery,
    useAddTaskMutation,
    useDeleteTaskMutation,
    usePatchTaskMutation,
} = tasksApi;