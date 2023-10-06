import { Container } from '@mui/material';
import { Paper, Typography, Box } from '@mui/material';
import { Fab } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const items = [
    {
        fecha: '2023-10-06',
        categoria: 'Frutas',
        descripcion: 'Manzanas',
        cantidad: 5,
        nombre: 'Juan Pérez',
        estado: 'Entregado'
    },
    {
        fecha: '2023-10-05',
        categoria: 'Verduras',
        descripcion: 'Zanahorias',
        cantidad: 10,
        nombre: 'Ana García',
        estado: 'Pendiente'
    }
];


const ListItem = ({ item }) => {
    return (
        <Paper style={{ padding: '1em', margin: '1em 0' }}>
            <Typography variant="h6">{item.nombre}</Typography>

            <Box display="flex" justifyContent="space-between">
                <Typography variant="body1">Fecha: {item.fecha}</Typography>
                <Typography variant="body1">Estado: {item.estado}</Typography>
            </Box>

            <Box display="flex" justifyContent="space-between">
                <Typography variant="body2">Categoría: {item.categoria}</Typography>
                <Typography variant="body2">Descripción: {item.descripcion}</Typography>
            </Box>

            <Box display="flex" justifyContent="flex-end">
                <Typography variant="body2">Cantidad: {item.cantidad}</Typography>
            </Box>
        </Paper>
    );
};


export default function ListPage() {
    return (
        <any>
            <Container>
                <Typography variant="h4" gutterBottom>  Donaciones</Typography>
                {items.map((item, index) => (
                    <ListItem key={index} item={item} />
                ))}
            </Container>
        </any>
    );
}