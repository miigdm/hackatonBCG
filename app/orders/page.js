"use client";
import { Container } from '@mui/material';
import { Paper, Typography, Box,Button } from '@mui/material';
import { Fab } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation'

import  GET_ORDERS  from '@/lib/queries/myorders';

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";


const ListItem = ({ item }) => {
    return (
        <Paper style={{ padding: '1em', margin: '1em 0' }}>
            <Typography variant="h6">{item.node.description} </Typography>

            <Box display="flex" justifyContent="space-between">
                <Typography variant="body1">Fecha: {item.node.date}</Typography>
                <Typography variant="body1">Estado: {item.node.transactionsByOrderId.edges.length?item.node.transactionsByOrderId.edges[0].node.actionByActionId.name:null}</Typography>
            </Box>

            <Box display="flex" justifyContent="space-between">
                <Typography variant="body2">Categoría: {item.node.categoryByCategoryId.name}</Typography>
            </Box>

            <Box display="flex" justifyContent="flex-end">
                <Typography variant="body2">Cantidad: {item.node.quantity}</Typography>
            </Box>
            <Box display="flex" justifyContent="flex-end">
                <Button variant="contained"  style={{ backgroundColor: 'red', color: 'white' }}>
                    Retirar
                </Button>
            </Box>
        </Paper>
    );
};


export default function ListPage() {
    const router = useRouter()
    const { data } = useSuspenseQuery(GET_ORDERS);

    return (
        <any>
         

            <Container>
            <Typography variant="h4" gutterBottom>  Colaboraciones</Typography>
                {data.allOrders.edges.map((item, index) => (
                    <ListItem key={index} item={item} />
                ))}
            </Container>
            <Fab
                onClick={() => router.push('/orders/new')}
                color="primary"
                aria-label="Crear"
                style={{ position: 'fixed', right: '16px', bottom: '16px' }}
            >
                <AddIcon />
            </Fab>
        </any>

    );
}