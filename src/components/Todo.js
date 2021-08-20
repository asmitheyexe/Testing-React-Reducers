import React from 'react';
import { Button, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import {ACTIONS} from './TodoComponent';

const ToDo = ({ todo,dispatch }) => {
	return (
		<Grid item direction='row' xs={12}>
            <Card variant='elevation'>
                <CardHeader 
                    action={<Grid container direction='row' spacing={2}>
                        <CustButton handleClick={() => dispatch({type: ACTIONS.EDIT, payload:todo })} label={'Edit'} />
                        <CustButton handleClick={() => dispatch({type: ACTIONS.DELETE, payload:todo })} label={'Delete'} />
                    </Grid>}

                    title={<Typography > {todo && todo.title}</Typography>}
                >
                </CardHeader>
                <CardContent>
                    {todo && todo.content}
                </CardContent>
            </Card>
		</Grid>
	);
};




const CustButton = ({handleClick,label}) => {


    return <Grid item xs><Button variant='outlined' onClick={handleClick}>{label}</Button></Grid>
}

export default ToDo;
