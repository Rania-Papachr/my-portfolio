import Container from "@mui/material/Container"; //a layout component used to center your content and set a max-width, so your text and elements don’t stretch too wide on large screens.
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack"; //a layout component that arranges elements: In a row or in a column. With automatic spacing between them like a cleaner, easier Flexbox.
import Divider from "@mui/material/Divider";

const About = () => {
  return (
    <Box
      component="section"
      sx={{ bgcolor: "#121212", color: "#fff", py: { xs: 8, md: 12 } }}
    >
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
