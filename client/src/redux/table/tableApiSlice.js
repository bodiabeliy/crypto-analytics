import {apiSlice} from "../apiSlice";

export const tableApiSlice = apiSlice.injectEndpoints({
    endpoints: build => ({
        fetchAllCoins: build.query({
            query: () => {
                return {
                    url:"coin/coins",
                    method: 'GET',
                    
                }
            }
        }),
        deleteCoin: build.mutation({
            query: name => ({
                url: '/coin/delete',
                method: 'DELETE',
                body: {name}
            })
        }),
        saveCoin: build.mutation({

            query: data => {
                return {
                    url: '/coin/redact',
                    method: "POST",
                    body: {...data}
                }
            }
        }),
        searchCoin: build.mutation({
            query: body => {
                return {
                    url: '/coin/search',
                    method: 'POST',
                    body
                }
            }
        }),
        coinLimit: build.query({
            query: () => {
                return {
                    url:"/coinLimit/findAll",
                    method:"GET"
                }
            },
            providesTags:['CoinLimit']
        }),
        coinDirection: build.query({
            query: () => {
                return {
                    url:"/coinDirection/find",
                    method:"GET"
                }
            },
            providesTags: ['CoinDirection']
        }),
        changeDirection: build.mutation({
            query: body => {
                return {
                    url: '/coinDirection/redact',
                    method: 'PUT',
                    body
                }
            },
            invalidatesTags: ['CoinDirection', 'Result']
        }),
        changeLimit: build.mutation({
            query: body => {
                return {
                    url: '/coinLimit/update',
                    method: 'PUT',
                    body
                }
            },
            invalidatesTags: ['CoinLimit', 'Result']
        }),
        getResultCoin: build.query({
            query: () => {
                return {
                    url: `/calculating/getTop`,
                    method:"GET"
                }
            },
            providesTags:[ 'Result']
        }),
        ecosystemCapitalization: build.query({
            query: (tokenRow) => {
                console.log("currentTokenName", tokenRow);
                return {
                    url: `/calculating/forks-ecosystem?parentToken=${tokenRow.classification}&currentToken=${tokenRow.name}`,
                    method: 'GET',
                }
            },
        }),
        filterCalculating: build.query({
            query: () =>  {
                return {
                    url:"/filterCalculating/find",
                    method:"GET"
                }
            },
            providesTags: ['filterCalculating']
        }),
        changeFilter: build.mutation({
            query: body => {
                return {
                    url: '/filterCalculating/redact',
                    method: 'PUT',
                    body
                }
            },
            invalidatesTags: ['filterCalculating', 'Result']
        }),
        projectVisibleFilter: build.query({
            query: () =>  {
                return {
                    url: "/projectVisibleFilter/find",
                    method:"GET"
                }
            },
            providesTags: ['projectVisibleFilter']
        }),
        changeVisibleFilter: build.mutation({
            query: body => {
                return {
                    url: '/projectVisibleFilter/redact',
                    method: 'PUT',
                    body
                }
            },
            invalidatesTags: ['projectVisibleFilter']
        }),
        projectBlureFilter: build.query({
            query: () =>  {
                return {
                    url:"/projectBlureFilter/find",
                    method: "GET"
                }
            },
            providesTags: ['projectBlureFilter']
        }),
        changeBlureFilter: build.mutation({
            query: body => {
                return {
                    url: '/projectBlureFilter/redact',
                    method: 'PUT',
                    body
                }
            },
            invalidatesTags: ['projectBlureFilter']
        }),
        coinTooltip: build.query({
            query: () => {
                return {
                    url:"/coinTooltip/find",
                    method:"GET"
                }
            },
            providesTags: ['coinTooltip']
        }),
        changeCoinTooltip: build.mutation({
            query: body => {
                return {
                    url: '/coinTooltip/redact',
                    method: 'PUT',
                    body
                }
            },
            invalidatesTags: ['coinTooltip']
        }),
        excelValue: build.query({
            query: () => {
                return {
                    url: "/excelValueRouter/findAll",
                    method: "GET"
                }
            },
            providesTags: ['excelValue']
        }),
        changeExcelValue: build.mutation({
            query: body => {
                return {
                    url: '/excelValueRouter/update',
                    method: 'PUT',
                    body
                }
            },
            invalidatesTags: ['excelValue', 'Result']
        }),
       
    }),

})

export const {
    useExcelValueQuery,
    useChangeExcelValueMutation,
    useChangeLimitMutation,
    useCoinTooltipQuery,
    useChangeCoinTooltipMutation,
    useProjectBlureFilterQuery,
    useChangeBlureFilterMutation,
    useChangeVisibleFilterMutation,
    useProjectVisibleFilterQuery,
    useFilterCalculatingQuery,
    useChangeFilterMutation,
    useGetResultCoinQuery,
    useCoinLimitQuery,
    useCoinDirectionQuery,
    useChangeDirectionMutation,
    useSaveCoinMutation,
    useLazyFetchAllCoinsQuery,
    useDeleteCoinMutation,
    useSearchCoinMutation,
    useFetchAllCoinsQuery,
    useEcosystemCapitalizationQuery
} = tableApiSlice