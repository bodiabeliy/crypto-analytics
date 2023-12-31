import {createSlice} from "@reduxjs/toolkit"

const tableState = createSlice({
    name: "table",
    initialState: {
        data: [],
        currentCoins: [],
        changedCoinsNames:[]
    },

    reducers: {
        changeValue: (state, action) => {
            const {coin, column, newValue} = action.payload
            state.data = state.data.map(row => {
                if (row.name === coin) {
                    const newRow = row
                    row[column] = newValue
                    return newRow
                } else
                    return row
            })
            if(!state.changedCoinsNames?.includes(coin)) state.changedCoinsNames?.push(coin)
        },
        changeCurrentCoins: (state, action) => {
            if(state.currentCoins.includes(action.payload)) {
                state.currentCoins = state.currentCoins.filter(coin => coin !== action.payload)
            }
            else state.currentCoins.push(action.payload)
        },
        setData: (state, action) => {
            state.data = action.payload.data
        },
        addNewCoin: (state, action) => {
            state.data.push(action.payload)
        },
        deleteCoin:(state,action)=>{
            state.currentCoins = state.currentCoins.filter(coin=>coin!==action.payload)
        },
        addCoinFilter:(state, action)=>{
            state.currentCoins.push(action.payload)
        },
       
    }
})

export const selectCurrentData = state => state.table.data
export const selectCurrentCoins = state => state.table.currentCoins
export const selectChangedCoinsNames = state=>state.table.changedCoinsNames

export const {changeValue, changeCurrentCoins, setData, addNewCoin, deleteCoin,addCoinFilter} = tableState.actions

export default tableState.reducer