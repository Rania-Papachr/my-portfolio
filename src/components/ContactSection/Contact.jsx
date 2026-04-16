import { Typography, Container, Box, Divider, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactRow from "./ContactRow";
import { contactData } from "../../data/contactData";

const Contact = () => {
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
          Get In Touch
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
        <Grid container spacing={6} sx={{ mt: 5 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                maxWidth: "300px",
                mx: "auto",
                borderLeft: "2px solid #1de9b6",
                pl: 3,
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, textAlign: "left" }}>
                Contact Details
              </Typography>

              {contactData.map((item, index) => (
                <ContactRow
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                  link={item.link}
                />
              ))}

              <ContactRow
                icon={LocationOnIcon}
                label="Location"
                value="Aigeira, Greece"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
