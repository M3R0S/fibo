import { TMainPositionItem, TMainPositionModalItemQuery } from './types/mainPositionTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';


const mainPositionApi = createApi({
    reducerPath: 'mainPositionApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/',
    }),
    tagTypes: ['mainPositionApi'],
    endpoints: (build) => ({
        getMainPositionList: build.query<TMainPositionItem[], string>({
            query: (type) => ({
                url: 'main_position',
                params: {
                    type,
                }
            }),
            providesTags: (result) => ['mainPositionApi']
        }),
        getMainPositionModalItem: build.query<TMainPositionItem, TMainPositionModalItemQuery >({
            query: ({type, id}) => ({
                url: 'main_position',
                params: {
                    type,
                    id,
                }
            }),
            providesTags: (result) => ['mainPositionApi']
        })
    })
})

export const {useLazyGetMainPositionListQuery, useGetMainPositionModalItemQuery} = mainPositionApi 

export default mainPositionApi