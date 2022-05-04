import React from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import FavButton from '../component/FavButton'
import { useTodoContext } from './TodoController';

export default function Checklist() {
    const {onDelete, onEdit, onClickFavorite, onClickDone, getData} = useTodoContext();

    const isCrossed = (item) => {
      let classname = "not-checked-item";
      if (item.isDone) classname = "checked-item";
      return classname;
    }
  
    return (
        <center>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {getData()?.map((item,key) => {
          const labelId = `checkbox-list-label-${key}`;
  
          return (
            <ListItem
              key={key}
              role={undefined}
              dense
              button
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={item.isDone}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                  onClick={()=>onClickDone(item)}
                />
                <FavButton checked={item.isFav} onClick={()=>onClickFavorite(item)} />
              </ListItemIcon>
              {/* <ListItemText id={labelId} primary={item.title} /> */}
              <ListItemText className={isCrossed(item)} id={labelId} primary={item.title} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments"
                    onClick={()=>{onEdit(item)}}
                >
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="comments" onClick={()=>{onDelete(item)}}>
                  <DeleteIcon style={{ color:"red" }}   />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
        </center>
      
    );
  }

