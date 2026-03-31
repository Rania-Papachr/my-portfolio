import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <Box
      component="section"
      sx={{ backgroundColor: "#121212", color: "#fff", py: { xs: 8, md: 12 } }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", letterSpacing: 1, textAlign: "center" }}
        >
          Projects
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
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 5,
            mt: 6,
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
