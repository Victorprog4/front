import {   Box, Grid, Card, CardContent, Button } from '@mui/material';

function Home() {
    return ( 
    <Box sx={{ mt: 8 }}>
        <Grid container spacing={2}>
          
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
            
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