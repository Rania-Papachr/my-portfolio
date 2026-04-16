import { Box, Typography } from "@mui/material";

// const ContactRowValue = styled(Typography)({
//   fontWeight: 500,
//   textDecoration: "none",
//   color: "#fff",
//   "&:hover": {
//     color: "#1de9b6",
//     cursor: "pointer",
//   },
// });

const ContactRow = ({ icon: Icon, label, value, link }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
        {Icon && <Icon sx={{ color: "primary.main", mr: 1 }} />}

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {label}
        </Typography>
      </Box>

      <Typography
        component={link ? "a" : "p"}
        href={link}
        target="_blank"
        variant="body1"
        sx={{
          fontWeight: 500,
          textDecoration: "none",
          color: "text.primary",
          "&:hover": link && {
            color: "primary.main",
            cursor: "pointer",
          },
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default ContactRow;
