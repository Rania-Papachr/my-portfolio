import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Chip,
  Box,
} from "@mui/material";

const ProjectCard = ({ project }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: 3,
        overflow: "hidden",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
        },
        "&:hover .media": {
          // when hover find media and apply the style below, like giving the image className="media"
          transform: "scale(1.05)",
        },
        "&:hover .title": {
          color: "primary.main",
        },
      }}
    >
      {/* Image wrapper (for zoom effect) */}
      <Box sx={{ overflow: "hidden" }}>
        <CardMedia
          className="media"
          component="img"
          image={project.image}
          alt={project.title}
          height="180"
          sx={{
            objectFit: "cover",
            transition: "transform 0.4s ease",
            filter: "brightness(0.75)",
          }}
        />
      </Box>

      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
        <Typography
          className="title"
          variant="h6"
          fontWeight="600"
          sx={{
            letterSpacing: 0.3,
            transition: "0.3s",
          }}
        >
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mt: 1 }}>
          {project.tech.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              sx={{
                backgroundColor: "rgba(29,233,182,0.1)",
                color: "primary.main",
                fontSize: "0.7rem",
              }}
            />
          ))}
        </Box>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "space-between",
          px: 2,
          pb: 2,
        }}
      >
        <Button
          size="small"
          href={project.github}
          target="_blank"
          sx={{
            color: "primary.main",
            borderRadius: 2,
            border: "1px solid rgba(29,233,182,0.4)",
            px: 1.5,
            fontSize: "0.75rem",
            "&:hover": {
              backgroundColor: "rgba(29,233,182,0.1)",
              borderColor: "primary.main",
            },
          }}
        >
          GitHub
        </Button>

        <Button
          size="small"
          href={project.demo}
          target="_blank"
          sx={{
            color: "primary.main",
            border: "1px solid rgba(29,233,182,0.4)",
            borderRadius: 2,
            px: 1.5,
            fontSize: "0.75rem",
            "&:hover": {
              backgroundColor: "rgba(29,233,182,0.1)",
              borderColor: "primary.main",
            },
          }}
        >
          Live Demo
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
