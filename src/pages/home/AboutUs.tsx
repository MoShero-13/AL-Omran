import Box from "@mui/material/Box";
import aboutImage from "../../assets/image/AboutUs.jpg";
import Typography from "@mui/material/Typography";

const AboutUs = () => {
  return (
    <>
      <Box sx={{ width: "90%", margin: "30px auto" }}>
        <Typography
          component="span"
          sx={{ fontSize: "36px", color: "#193a51" }}
        >
          About Us
        </Typography>
      </Box>
      <Box
        sx={{
          width: "90%",
          display: { xs: "block", md: "flex" },
          margin: "auto",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Box
            component="img"
            src={aboutImage}
            alt="About Us"
            sx={{
              width: "100%",
              height: { xs: 250, md: 400 },
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "90%", md: "45%" },
            margin: "auto",
            alignContent: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(19, 90, 136, 0.54)",
              backdropFilter: "blur(24px)",
              color: "#fff",
              p: 2,
              width: "90%",
              marginBottom: "20px",
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: "24px",
                color: "#eadccc",
              }}
            >
              Al-Omran
            </Typography>{" "}
            Real Estate Development aims to enhance quality of life through
            innovative real estate projects rooted in design excellence.
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(19, 90, 136, 0.54)",
              backdropFilter: "blur(24px)",
              color: "#fff",
              p: 2,
              width: "90%",
              marginBottom: "20px",
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: "24px",
                color: "#eadccc",
              }}
            >
              Vision
            </Typography>{" "}
            to be the nation’s leading real estate developer in creating upscale
            communities that reflect a distinguished lifestyle and exceptional
            quality.
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(19, 90, 136, 0.54)",
              backdropFilter: "blur(24px)",
              color: "#fff",
              p: 2,
              width: "90%",
              marginBottom: "20px",
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: "24px",
                color: "#eadccc",
              }}
            >
              Mission
            </Typography>{" "}
            To develop pioneering projects that enhance community living through
            excellence in design and quality execution, with a commitment to
            delivering unique and integrated living experiences.
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;
