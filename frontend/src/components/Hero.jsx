import { Box,styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import "./Hero.css";
import heroImg from "../assets/images/hero2.jpg";
import CustomButton from "./CustomButton";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(1),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box
      style={{ marginTop: "0px", marginBottom : "50px"}}
      sx={{ backgroundColor: "#fff", minHeight: "80vh" }}
    >
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to Third Gen tech
            </Typography>
            <Title variant="h1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              eligendi deleniti nulla, ex aliquam ipsum! Voluptatem error
              temporibus aut optio repellendus eum autem?
            </Typography>
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="More About Us"
              heroBtn={true}
            />
          </Box>

          <Box sx={{ flex: "1" }}>
            <img className="hero" src={heroImg} alt="heroImg" />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
