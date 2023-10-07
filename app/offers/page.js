"use client"
import { useEffect, useState } from 'react';
import { Container,Stack, Paper, Typography, Box , Button} from '@mui/material';


import  GETAll_OFFERS  from '@/lib/queries/getAllOffers';
import  GET_OFFERS  from '@/lib/queries/offers';
import createTransaction from '@/lib/requests/createTransaction';

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"



const send = (item,num) =>{
    let userID = JSON.parse(localStorage.getItem("user"))
    let tx =  {
        "date": new Date(),
        "actionId": num,
        "orderId": (+(item.orderByOrderId.id) ),
        "userId": userID
    }

    createTransaction(tx).then((data)=>{
        console.log(data)
        window.location.href = "/offers"
    })
}


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
                
            
                 {item.node.actionByActionId.id==1&&<Button variant="contained" onClick={(e) => { send(item.node,2)  }} color="primary">
                    Lo quiero!
                </Button>}
                {item.node.actionByActionId.id==2&&(<Stack direction="row" spacing={2} >
                <Button variant="contained" color="success" onClick={(e) => { send(item.node,3)  }} >
                    Retirar
                </Button>
                
                <Button variant="contained" color="error" onClick={(e) => { send(item.node,1 )  }} >
                   Cancelar
                </Button>
                </Stack>)} 
                {item.node.actionByActionId.id==3&&<Button variant="contained" color="secondary">
                   Retirado
                </Button>}
            </Box>
        </Paper>
    );
};


export default function ListPage() {
    const [orders, setOrders] = useState([]);

    const { data } = useSuspenseQuery(GETAll_OFFERS);
    
    useEffect(() => {
        if (data && data.allGetOffers) {
            const ids = data.allGetOffers.edges.map(item => item.node.id);
            GET_OFFERS(ids)
            .then(response => {
                console.log("data", response.data);
                setOrders(response.data.allTransactions.edges);
            })
            .catch(error => {
                // Maneja el error aquí si lo deseas.
                console.error("Error al obtener las ofertas:", error);
            });
        }
    }, [data]);
        //setOrders(offers)



    return (
        <any>
            <Container>
                <Typography variant="h4" gutterBottom>  Donaciones</Typography>
                {orders.map((item, index) => (
                    <ListItem key={index} item={item} />
                ))}
            </Container>
        </any>
    );
}