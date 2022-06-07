import { Box, Container, Grid, Typography } from "@mui/material";
import { getData } from "../../../loader/getData";
import React, { useState, useEffect } from "react";
import Table from "./Table";
import salariesStyles from "../../../styles/Salaries.module.css";

export default function SalariesContainer({ data }) {
  const [salariesData, setSalariesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/airtable`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const formattedData = await response.json();
      setSalariesData(formattedData);
    };

    fetchData();
  }, []);

  return (
    <div className={salariesStyles.container}>
      <Container sx={{ py: 12 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 1 }}
            columns={{ xs: 2, md: 12 }}
          >
            <Table data={salariesData} />
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
