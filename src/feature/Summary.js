import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useTodoContext } from './TodoController'


export default function Summary() {
    const {totalDone,totalTodo,totalFavorite} = useTodoContext()
    return (
        <Grid container direction="column" justify="center" style={{ marginLeft:15 }}>
            <Typography>Done {totalDone}/{totalTodo}</Typography>
            <Typography>Favorite {totalFavorite}/{totalTodo}</Typography>
        </Grid>
    )
}
