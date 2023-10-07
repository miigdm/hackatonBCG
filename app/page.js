'use client'
import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  const router = useRouter();

    return (
        <>
            <Container>
                <Image
                    src="/logo.png"
                    alt="Imagen representativa"
                    width="300"
                    height="80"
                />
            </Container>
            <Container>
                <Typography variant="h2">
                    Transformando desechos en ayuda social 
                </Typography>
            
            </Container>

            <Container>
    <Typography variant="h4" gutterBottom>
        Sobre Nosotros
    </Typography>
    <Typography variant="body1" paragraph>
        Somos una empresa con la misión de reducir el desperdicio de locales de comida y ayudar a quienes más lo necesitan. Desde ayer, hemos colaborado con negocios y albergues en Santiago para entregar comida de calidad antes de que se dañe.
    </Typography>
    <Typography variant="body1">
        Hasta la fecha, hemos salvado 10.000 kg de comida y apoyado a 5 albergues.
    </Typography>
</Container>

<Container>
    <Typography variant="h4" gutterBottom>
        ¿Cómo Funciona?
    </Typography>
    <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
            <Card>
                <CardContent>
                    <Typography variant="h6">1. Regístrate</Typography>
                    <Typography variant="body2">Los negocios y albergues se registran en nuestra plataforma y listan la comida que está por dañarse.</Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} md={4}>
            <Card>
                <CardContent>
                    <Typography variant="h6">2. Colaboraciones</Typography>
                    <Typography variant="body2"> Los negocios listan la comida que está por dañarse.</Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} md={4}>
            <Card>
                <CardContent>
                    <Typography variant="h6">3. Donaciones </Typography>
                    <Typography variant="body2">Los albergues aceptan las Colaboraciones y retiran su comida. </Typography>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
</Container>

<Container>
    <Typography variant="h4" gutterBottom>
        Preguntas Frecuentes
    </Typography>
    <Typography variant="h6" gutterBottom>
        ¿Cómo buscamos?
    </Typography>
    <Typography variant="body2" paragraph>
        ¿Sabías que mucha comida se bota a la busara mientras hay gente que no tiene que comer? 
    </Typography>
    <Typography variant="body2" paragraph>
        Nosotros buscamos reducir el desperdicio alimenticio y ayudar a quienes más lo necesitan.
    </Typography>
    {/* Añadir más preguntas y respuestas según lo necesario */}
</Container>

<Button sx={{ position:"absolute", bottom:0 , right:0, padding:2, margin: '10px' } } 
onClick={() => router.push('/login')}
variant='contained' color='success' > Ingresar  </Button>

            {/* Las otras secciones irían aquí */}
        </>
    );
}
