"use client"
import { useEffect, useState } from 'react';
import { Container,Stack, Paper, Typography, Box , Button, Chip} from '@mui/material';


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
        window.location.href = "/offers"
    })
}


const ListItem = ({ item }) => {
    const chipColor = {
        1: 'green',
        2: 'yellow',
        3: 'green',
        4: 'red'
    }[item.node.actionByActionId.name];

    return (
        <Paper style={{ padding: '1em', margin: '1em 0' }}>
            <Typography variant="h6">{item.node.orderByOrderId.description}</Typography>

            <Box display="flex" justifyContent="space-between">
            <Typography variant="body2">Cantidad: {item.node.orderByOrderId.quantity}</Typography>
                <Typography variant="body1">Fecha: {item.node.orderByOrderId.date}</Typography>
                <Chip variant="body1" label={item.node.actionByActionId.name} color='secondary' style={{backgroundColor: chipColor}}/>
            </Box>

            <Box display="flex" justifyContent="space-between">
                <Typography variant="body2">Categoría: {item.node.orderByOrderId.categoryByCategoryId.name}</Typography>
                <Typography variant="body2">Donante: {item.node.orderByOrderId.userByUserId.fullname}</Typography>
                <Typography variant="body2">Dirección: {item.node.orderByOrderId.userByUserId.direction}</Typography>
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
                {item.node.actionByActionId.id==3&&<Button variant="contained" color="primary">
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
                if (response.data.allTransactions.edges.length == 0) {
                    return;
                }

                console.log("data", response.data);
                let user = JSON.parse(localStorage.getItem("user"))
                let data =[]
                response.data.allTransactions.edges.map((item,index)=>{
                    if(item.node.actionId==1 || item.node.userId == user){
                        data.push(item)
                    }
                })

                console.log("data2", data);


                setOrders(data);
            })
            .catch(error => {
                // Maneja el error aquí si lo deseas.
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