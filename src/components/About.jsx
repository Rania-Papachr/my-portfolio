import { Container, Box, Typography, Stack, Divider } from "@mui/material";

const About = () => {
  return (
    <Box id="about" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center">
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center", letterSpacing: 1 }}
          >
            About Me
          </Typography>
          <Divider
            sx={{
              backgroundColor: "#1de9b6",
              width: "150px",
              height: "1.6px",
              mx: "auto",
              my: 2,
            }}
          />
          <Typography
            variant="body1"
            sx={{ textAlign: "center", maxWidth: "650px", mx: "auto" }}
          >
            I'm passionate about web development and always curious to learn new
            things. As a junior frontend developer, I focus on writing clean and
            functional code while exploring new design ideas.
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", maxWidth: "650px", mx: "auto" }}
          >
            My goal is to create websites that are both visually appealing and
            easy to use.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
