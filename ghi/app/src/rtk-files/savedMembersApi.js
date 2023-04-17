import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const savedMembersApi = createApi({
    reducerPath: 'savedMembers',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_HOST,
    }),
    tagTypes: ['SavedMembers'],
    endpoints: builder => ({
        getSavedMembers: builder.query({
            query: () => '/api/saved_members',
            providesTags: ['SavedMembers'],
        }),
        createOrUpdateSavedMember: builder.mutation({
            query: data => ({
                url: '/api/saved_members/',
                body: data,
                method: 'post',
            }),
            invalidatesTags: ['SavedMembers'],
        }),
        deleteSavedMember: builder.mutation({
            query: uuid => ({
                url: `/api/saved_members/${uuid}`,
                method: 'delete',
            }),
            invalidatesTags: ['SavedMembers'],
        }),
    }),
});

export const {
    useGetSavedMembersQuery,
    useCreateOrUpdateSavedMemberMutation,
    useDeleteSavedMemberMutation,
} = savedMembersApi;
