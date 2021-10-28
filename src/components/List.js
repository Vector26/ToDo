import React from 'react'
import '../App.css';
import './list.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material';
import {useSelector} from 'react-redux';
import { deleteTodo } from '../actions';
import { useDispatch } from 'react-redux';

function NList(props) {
    const dispatch=useDispatch();
    const list=useSelector((state)=> state.myreducer.data);
    var res=<div className="list container" style={{"padding":"0"}}>
    <Box sx={{ bgcolor: '#FFFFFF11'}}>
    <List sx={{minWidth:"100%",maxHeight: '55vh', overflow: 'auto'}}>
    {
      list.map((post,key)=>{
      return(
        <ListItem key={key}>
        <ListItemText primary={
            <div style={{"display":'flex',"flexWrap":'wrap',"maxWidth":"100vw","wordBreak":"break-word"}}>
              <p style={{"marginRight":"1em"}}>{key+1}. {post.note}</p>
              <Button variant="outlined" color="error" sx={{"marginLeft":"auto "}} onClick={()=>{dispatch(deleteTodo(key))}}>Delete</Button>
            </div>
          }/>
        </ListItem>
      )
    })}
    </List>
    </Box>
    </div>
    return (res)
}

export default NList
