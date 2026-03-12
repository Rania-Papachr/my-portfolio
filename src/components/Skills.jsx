import { Container, Typography, Box, Grid, Divider } from "@mui/material";
import skills from "../data/skills";

const Skills = () => {
  return (
    <Box
      component="section"
      sx={{ bgcolor: "#121212", color: "#fff", py: { xs: 8, md: 12 } }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            letterSpacing: 1,
            mb: 4,
          }}
        >
          Skills
        </Typography>
        <Divider
          sx={{
            backgroundColor: "#1de9b6",
            width: "150px",
            height: "1.5px",
            mx: "auto",
            my: 2,
          }}
        />
        <Grid container spacing={6} justifyContent="center" sx={{ mt: 5 }}>
          {skills.map((skill) => (
            <Grid key={skill.name} size={{ xs: 6, sm: 4, md: 4 }}>
              <Box
                sx={{
                  bgcolor: "#1a1a1a",
                  textAlign: "center",
                  borderRadius: 2,
                  py: 4,
                  transition: "0.3s",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={skill.icon}
                  alt={skill.name}
                  sx={{
                    width: 50,
                    height: 50,
                    mx: "auto",
                    mb: 2,
                    filter: `drop-shadow(0 0 4px ${skill.color})`,
                    //filter is a CSS property that adds visual effects. drop-shadow:which adds a glow / shadow around the icon.
                    //x offse - y offset -	blur - color
                  }}
                />
                <Typography variant="h6">{skill.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
