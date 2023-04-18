import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// create api per rtk
export const savedMembersApi = createApi({
    reducerPath: 'savedMembers',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_HOST,
    }),
    tagTypes: ['SavedMembers'],
    endpoints: builder => ({
        // build get list endpoint
        getSavedMembers: builder.query({
            query: () => '/api/saved_members',
            providesTags: ['SavedMembers'],
        }),
        // build create or update endpoint
        createOrUpdateSavedMember: builder.mutation({
            query: data => ({
                url: '/api/saved_members/',
                body: data,
                method: 'post',
            }),
            invalidatesTags: ['SavedMembers'],
        }),
        // build delete endpoint
        deleteSavedMember: builder.mutation({
            query: uuid => ({
                url: `/api/saved_members/${uuid}`,
                method: 'delete',
            }),
            invalidatesTags: ['SavedMembers'],
        }),
        // build get one endpoint
        getSavedMember: builder.query({
            query: (uuid) => `/api/saved_members/${uuid}/`,
            providesTags: ['SavedMember'],
        }),
    }),
});

export const {
    useGetSavedMembersQuery,
    useCreateOrUpdateSavedMemberMutation,
    useDeleteSavedMemberMutation,
    useLazyGetSavedMemberQuery,
} = savedMembersApi;
