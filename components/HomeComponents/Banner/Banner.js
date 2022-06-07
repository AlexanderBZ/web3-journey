import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React, { useRef, useState } from "react";
import hero from "../../../images/hero.svg";
import bannerStyles from "../../../styles/Banner.module.css";
import Navigation from "../../Navigation/Navigation";

const Banner = () => {
  //UseState for submit
  const [submit, setSubmit] = useState(false);

  //Ref for email
  const emailInputRef = useRef();

  //Submit handler for auth
  async function submitHandler(event) {
    //Prevent default HTMl function
    event.preventDefault();

    //Get value of email and password inputs
    const enteredEmail = emailInputRef.current.value;

    if (!enteredEmail || enteredEmail == "") {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      let response = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email: enteredEmail }),
      });

      emailInputRef.current.value = "";

      await setSubmit(true);
    } catch (error) {
      await console.log(error);
    }
  }

  return (
    <div className={bannerStyles.headerSection}>
      {/* navigaiton  */}
      <Navigation />
      <Container sx={{ py: 6, color: "#fff" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            sx={{
              alignItems: "center",
              flexDirection: { xs: "column-reverse", md: "inherit" },
            }}
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, md: 12 }}
          >
            <Grid item xs={2} md={6}>
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    my: { xs: 2, md: 4 },
                    fontSize: { xs: 30, md: 64 },
                  }}
                  variant="h3"
                  component="h1"
                >
                  Get Paid Fairly in the Wild World of Web3
                </Typography>
                <Typography variant="body1">
                  {`Hey it's Alexander (The founder of Web3 Journey), check out my newsletter to stay up to date on new and exciting companies in Web3`}
                </Typography>
              </Box>
              <Box className={bannerStyles.subscribeBox} sx={{ my: 3 }}>
                <form
                  onSubmit={submitHandler}
                  className={bannerStyles.subscribeBox}
                >
                  <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                  >
                    <input
                      className={bannerStyles.subscribeForm}
                      placeholder="Enter your email address..."
                      type="email"
                      id="email"
                      ref={emailInputRef}
                      required
                    />
                    <Button
                      className={bannerStyles.subscribeBtn}
                      variant="contained"
                      type="submit"
                    >
                      {submit ? "Subscribed ✓" : "Subscribe"}
                    </Button>
                  </Stack>
                </form>
              </Box>
            </Grid>
            <Grid item xs={2} md={6}>
              <Image src={hero} alt="hero" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Banner;
