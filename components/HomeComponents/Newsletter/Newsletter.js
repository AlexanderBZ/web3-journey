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
import React, { useRef, useState } from "react";
import footerStyles from "../../../styles/Footer.module.css";
import Image from "next/image";
import ethereum from "../../../images/ethereum.svg";
import bitcoinCurved from "../../../images/bitcoin-curved.svg";

const Newsletter = () => {
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
    <div className={footerStyles.newsletter}>
      <Container
        sx={{
          py: 8,
          color: "#fff",
          bgcolor: "#3671E9",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <Grid container spacing={{ xs: 2, md: 8 }} columns={{ xs: 2, md: 12 }}>
          <Grid item xs={2} md={6}>
            <Box sx={{ pl: 4 }} className={footerStyles.newsletterTextBox}>
              <Box className={footerStyles.ethereum}>
                <Image src={ethereum} alt="" width={160} height={250} />
              </Box>
              <Typography sx={{ my: 2 }} variant="h4">
                Subscribe to my newsletter
              </Typography>
              <Typography variant="body1">
                Stay up to date on new and exciting companies in Web3
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} md={6}>
            <Box sx={{ pr: 4 }} className={footerStyles.newsletterFormBox}>
              <form
                onSubmit={submitHandler}
                className={footerStyles.newsletterFormInput}
              >
                <input
                  className={footerStyles.newsletterForm}
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  ref={emailInputRef}
                  required
                />
                <Button
                  className={footerStyles.newsletterBtn}
                  variant="contained"
                  type="submit"
                >
                  {submit ? "Subscribed✓" : "Subscribe"}
                </Button>
              </form>

              <Box className={footerStyles.bitcoinCurved}>
                <Image src={bitcoinCurved} alt="" width={160} height={250} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Newsletter;
