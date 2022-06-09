import TwitterIcon from "@mui/icons-material/Twitter";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import WebsiteLogo from "../../images/logo.svg";
import footerStyles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      {/* desktop footer  */}
      <Box
        sx={{ display: { xs: "none", md: "block" } }}
        className={footerStyles.footerSection}
      >
        <Container sx={{ pt: 8, pb: 4 }}>
          {/* footer top  */}
          <Grid
            container
            spacing={{ xs: 2, md: 8 }}
            columns={{ xs: 2, md: 12 }}
          >
            <Grid item xs={2} md={8}>
              <Image src={WebsiteLogo} alt="" />
            </Grid>
            <Grid item xs={2} md={4}>
              {/* <Typography
                className={footerStyles.footerTitle}
                sx={{ fontSize: 32 }}
                variant="h4"
              >
                Donations are always appreciated
              </Typography> */}
              {/* payment icons */}
              {/* <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                <Image src={visa} alt="" width={90} height={60} />
                <Image src={mastercard} alt="" width={90} height={60} />
                <Image src={bitcoinPay} alt="" width={90} height={60} />
              </Box> */}
            </Grid>
          </Grid>
          {/* footer bottom  */}
          <Grid
            sx={{ alignItems: "center", pt: 10 }}
            container
            spacing={{ xs: 2, md: 8 }}
            columns={{ xs: 2, md: 12 }}
          >
            <Grid item xs={2} md={8}>
              {/* copyright  */}
              <Typography
                sx={{ fontSize: 14, fontWeight: 400 }}
                variant="body2"
              >
                ©2022 Web3 Journey. All rights reserved
              </Typography>
            </Grid>
            <Grid item xs={2} md={4}>
              {/* socail icons  */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 2,
                  mt: 3,
                }}
              >
                <a
                  href="https://twitter.com/Hey_Zwerner"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterIcon />
                </a>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* mobile footer  */}
      <Box
        sx={{ display: { xs: "block", md: "none" } }}
        className={footerStyles.footerSection}
      >
        <Container sx={{ pt: 6, pb: 3 }}>
          {/* <Typography
            className={footerStyles.footerTitle}
            sx={{ fontSize: 20, textAlign: "center" }}
            variant="h4"
          >
            Donations are always appreciated
          </Typography> */}
          {/* payments icons  */}
          {/* <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}
          >
            <Image src={visa} alt="" width={60} height={60} />
            <Image src={mastercard} alt="" width={60} height={60} />
            <Image src={bitcoinPay} alt="" width={60} height={60} />
          </Box> */}
          {/* social  */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              gap: 2,
              mt: 3,
            }}
          >
            <Typography
              className={footerStyles.footerTitle}
              sx={{ fontSize: 20 }}
              variant="h5"
            >
              Check out my twitter!
            </Typography>

            <a
              href="https://twitter.com/Hey_Zwerner"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
          </Box>
          {/* copyright  */}
          <Typography
            sx={{ fontSize: 14, fontWeight: 400, textAlign: "center", mt: 3 }}
            variant="body2"
          >
            ©2021 Web3 Journey. All rights reserved
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
