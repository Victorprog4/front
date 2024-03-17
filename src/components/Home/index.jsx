import {   Typography,  Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

function Home() {
    return ( 
    <Box sx={{ mt: 8 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                image="https://source.unsplash.com/random/800x600?nature"
                alt="Imagem da Empresa"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Quem Somos
                </Typography>
                <Typography variant="body1">
                  Somos uma empresa dedicada a [descrição da sua missão].
                  Fundada em [ano], nossa equipe apaixonada se esforça para [descrição dos seus valores].
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  O Que Fazemos
                </Typography>
                <Typography variant="body1">
                  Oferecemos uma variedade de serviços para atender às suas necessidades.
                </Typography>
                <ul>
                  <li>Serviço 1: [descrição breve do serviço 1]</li>
                  <li>Serviço 2: [descrição breve do serviço 2]</li>
                  <li>Serviço 3: [descrição breve do serviço 3]</li>
                </ul>
                <Button variant="contained" size="medium" href="/services">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    )}


export default Home;