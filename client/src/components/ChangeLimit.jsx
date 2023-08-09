import {useEffect, useState} from "react";
import {Button, Popover, Stack, TextField} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { useChangeLimitMutation} from "../redux/table/tableApiSlice";


const ChangeLimit = ({name,limits}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [min, setMin] = useState(limits.min);
    const [max, setMax] = useState(limits.max);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    useEffect(() => {
       if(min ==undefined) {
        setMin(0)
       } 
       
    })
    useEffect(() => {
        if(max ==undefined) {
         setMax(0)
        } 
        
     })
    

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const [changeLimit] = useChangeLimitMutation()
    const handleChangeLimit = async () => {

        try {

            await changeLimit({limitName: 'lower limit', data:{[name]:Number(min)}})
            await changeLimit({limitName:'upper limit',data:{[name]:Number(max)}})
            handleClose()
        } catch (e) {
            console.log(e)
        }
    }
    // if(!Object.keys(limits).length) return <div>-</div>
    return (
        <div>
            <Button aria-describedby={id} size={'small'} variant="contained" onClick={handleClick}>
                {typeof limits.min ===  'number'  ? `${new Intl.NumberFormat("ru").format(min)} - ${new Intl.NumberFormat("ru").format(max)}` : `${new Intl.NumberFormat("ru").format(min)} - ${new Intl.NumberFormat("ru").format(max)}`}
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Stack display={'flex'} flexDirection={'row'} alignItems={'center'}>
                    <TextField InputProps={{border:'none'}} size={'small'} border={'none'} fullWidth value={min} onChange={e=>setMin(e.target.value)}/>
                    <TextField InputProps={{border:'none'}} size={'small'} border={'none'} fullWidth value={max} onChange={e=>setMax(e.target.value)}/>
                    <CheckIcon onClick={handleChangeLimit} fontSize={'small'} color={'primary'} sx={{margin:1, cursor:'pointer'}} />
                </Stack>

            </Popover>
        </div>
    )

};

export default ChangeLimit;


