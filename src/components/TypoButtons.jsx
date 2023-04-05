import { Box, Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const TypoButtons = () => {
  return(
    <>
    <Container>
      <Typography variant="h1" component="h6" align="center" mt={6} color="primary">
        MUI Typography
      </Typography>

      <Typography variant="body" component="h6" align="justify" mt={4} color="secondary" sx={{background:"lightgreen",fontSize:"1.2rem"}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum pariatur, odio repellat nobis et quis beatae. Quo accusantium modi perspiciatis culpa fugiat excepturi corporis officia. Nesciunt quibusdam labore cupiditate? Fugit minima dolore et illum itaque earum. Nulla dolorum porro facilis, fuga facere atque impedit molestiae consequuntur id nihil aliquam ad.
      </Typography>

      <Typography variant="button" mt={2} sx={{display:"inline-block", cursor:"pointer", background:"red"}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, fuga laborum deleniti aut iusto, sapiente, quos eveniet eum culpa ex consectetur! Commodi, ea explicabo? Atque similique placeat sint ut quos.
      </Typography>

    </Container> 


    <Container>
      <Box mt={2} sx={{display:"flex", flexDirection:"column",gap:"0.3rem", width:"50%"}}>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      <Button color="error" variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button color="success" variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      </Box>
    </Container>


    </>
   
  
  ) 
  
};

export default TypoButtons;
