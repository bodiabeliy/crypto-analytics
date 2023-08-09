import React, { useEffect, useState } from 'react';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentGroup} from "../redux/groups/groupsSlice";
import {changeValue, deleteCoin,} from "../redux/table/tableSlice";
import {useDeleteCoinMutation, useEcosystemCapitalizationQuery} from "../redux/table/tableApiSlice";
import DeleteIcon from '@mui/icons-material/Delete';
import Input from "../components/UI/Input/Input"

import InputFormat from '../utils/InputFormat';
import ModifyCoinGroupChildrenValues from "../utils/ModifyCoinGroupChildrenValues"

const Row = ({row}) => {
    const dispatch = useDispatch()
    const group = useSelector(selectCurrentGroup)
    const {data} = useEcosystemCapitalizationQuery(row)
    const [ecosystemCapitalization, setEcosystemCapitalization] = useState(0)
    const [totalEcosystemCapitalization, setTotalEcosystemCapitalization] = useState(0)
    const [percentEcoSystem, setPercentEcoSystem] = useState(0)


    useEffect(() => {
            if (data != undefined) {
                data.map((dynamicKey) => {
                    if (Object.entries(dynamicKey)[0]?.[0] == row?.name) {
                        setEcosystemCapitalization(Object.entries(dynamicKey)[0][1].total)
                        setTotalEcosystemCapitalization(Number(Object.entries(dynamicKey)[0][1].total) + Number(Object.entries(dynamicKey)[0][1].currentCoinCapitalization))
                        setPercentEcoSystem( Number(Object.entries(dynamicKey)[0][1].total / Number(Object.entries(dynamicKey)[0][1].currentCoinCapitalization))*100)
                    }
                })
            }
    }, [data])

    console.log("percentEcoSystem", percentEcoSystem);
    const [deleteCoinRequest] = useDeleteCoinMutation()

    const handleChange = (coin, column, newValue) => {
        dispatch(changeValue({coin, column, newValue}))

    }
    const handleDeleteCoin= async ()=>{
        dispatch(deleteCoin(row.name))
        await deleteCoinRequest(row.name)
    }

    return (
        <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
            <TableCell  sx={{background:'#ecf0f4', fontFamily: "FuturaPT-Medium", fontSize:16}} align="center" component="th" scope="row">
                {row.name}
                
            </TableCell>
            <TableCell sx={{background:'#ecf0f4', fontFamily: "FuturaPT-Medium", fontSize:16}} align="center" component="th" scope="row">
                {row.full_name}
            </TableCell>
            <TableCell sx={{background:'#ecf0f4', fontFamily: "FuturaPT-Medium", fontSize:16}} align="center" component="th" scope="row">
                {row.rating?.toFixed(2)}
            </TableCell>
            
            {
                Object.keys(group).map(elem => {
                    let formatedValue =InputFormat(row[elem])
                    if (group[elem] && elem !== "name" && elem!=='full_name') {
                        return (
                            <TableCell key={elem} align="center" sx={{padding:0}}>
                                <Input type="text" name="price" style={{borderColor: "#effbf8"}}
                                       className="table-flex__item" value={
                                        elem == "es_capitalization"?ModifyCoinGroupChildrenValues(ecosystemCapitalization, "es_capitalization").currentChildrenValue
                                        :elem =="es_total_capitalization" ?ModifyCoinGroupChildrenValues(totalEcosystemCapitalization, "es_total_capitalization").currentChildrenValue
                                        :elem =="ecosystem_percent" ? percentEcoSystem.toFixed(2) + " %"
                                        :formatedValue}
                                        // disabled={true}
                                       onChange={(e) => handleChange(row.name, elem, e.target.value)}/>
                            </TableCell>
                        )
                    } else {
                        return null
                    }
                })
            }
            <TableCell sx={{background:'#ecf0f4'}}>
                <DeleteIcon color={'error'} sx={{cursor:"pointer"}} onClick={handleDeleteCoin} />
            </TableCell>
        </TableRow>
    );
};

export default Row;