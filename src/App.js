import { Box, Button, Card, Container, Typography } from '@mui/material';

function App() {
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <Card sx={{ p: 4 }}>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
          }}
        >
          <Typography>
            Edit <code>src/App.js</code> and save to reload.
          </Typography>

          <Button variant="contained">primary</Button>
          <Button variant="contained" color="secondary">
            secondary
          </Button>
        </Box>
      </Card>
    </Container>
  );
}

export default App;
