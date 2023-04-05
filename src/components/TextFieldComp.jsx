import { Box, Button, TextField, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { useState } from "react";

const TextFieldComp = () => {
    const [error,setError]=useState(false)
  return(
    <>
    <Container>
      <Typography variant="h4" align="center" mt={6} color="error">
        Text Field
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
      
      <TextField id="email" label="Email" placeholder="Enter your Email" fullWidth error={error} helperText={error && "Incorrect email format"}/>
      
      <TextField margin="normal" id="password" label="Password" placeholder="Enter your Password" fullWidth error={error} helperText={error && "Incorrect password format"}/>

        <Button variant="contained" color="warning" sx={{mt:3}}>
            Submit
        </Button>   
      </Box>
    </Container>


    </>
   
  
  ) 
  
};

export default TextFieldComp;
