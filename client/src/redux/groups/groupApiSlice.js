import {apiSlice} from "../apiSlice";

export const groupsApiSlice = apiSlice.injectEndpoints({
    endpoints: build => ({
        fetchAllGroups: build.query({
            query: () => 'filter/filters'
        }),
        fetchClientCoinGroupedCategories: build.query({
            query: () => 'coinGropCategory/find'
        }),
        deleteAdminGroup: build.mutation({
            query: filterId=>({
                url:'/filter/delete',
                method:'DELETE',
                body:{filterId}
            })
        }),
        createAdminGroup: build.mutation({
            query: body=>({
                url:'/filter/create',
                method:"POST",
                body
            })
        })
    })
})

export const {useLazyFetchAllGroupsQuery, useFetchClientCoinGroupedCategoriesQuery,  useCreateAdminGroupMutation} = groupsApiSlice