"use client"
import { Container } from '@mui/material';
import { Paper, Typography, Box , Button} from '@mui/material';


import  GET_OFFERS  from '@/lib/queries/offers';

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"


const ListItem = ({ item }) => {
    return (
        <Paper style={{ padding: '1em', margin: '1em 0' }}>
            <Typography variant="h6">{item.node.orderByOrderId.description}</Typography>

            <Box display="flex" justifyContent="space-between">
            <Typography variant="body2">Cantidad: {item.node.orderByOrderId.quantity}</Typography>
                <Typography variant="body1">Fecha: {item.node.orderByOrderId.date}</Typography>
                <Typography variant="body1">Estado: {item.node.actionByActionId.name}</Typography>
            </Box>

            <Box display="flex" justifyContent="space-between">
                <Typography variant="body2">Categoría: {item.node.orderByOrderId.categoryByCategoryId.name}</Typography>
                <Typography variant="body2">Donante: {item.node.orderByOrderId.userByUserId.fullname}</Typography>
                <Typography variant="body2">Direccion: {item.node.orderByOrderId.userByUserId.direction}</Typography>
            </Box>
            <br/>

            <Box display="flex" justifyContent="flex-end">
                <Button variant="contained" color="primary">
                    ¡Lo quiero!
                </Button>
            </Box>
        </Paper>
    );
};


export default function ListPage() {
    const { data } = useSuspenseQuery(GET_OFFERS);

    return (
        <any>
            <Container>
                <Typography variant="h4" gutterBottom>  Donaciones</Typography>
                {data.allTransactions.edges.map((item, index) => (
                    <ListItem key={index} item={item} />
                ))}
            </Container>
        </any>
    );
}