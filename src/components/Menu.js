import React from "react";
import Toast from "../Assets/Toast.png";
import sandwich from "../Assets/Sandwich.png";
import burata from "../Assets/burata.png";
import jusChia from "../Assets/jusChia.png";
import tea from "../Assets/tea.png";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container
} from "@mui/material";

const Menu = () => {
  const menuItems = [
    {
      title: "Copycat Dunkin’ Avocado Toast",
      description: "vibrant green veggie pesto sandwich is the perfect way to get your day started",
      price: "10 dh",
      image: Toast,
    },
    {
      title: "Pesto Breakfast Sandwich",
      description: "vibrant green veggie pesto sandwich is the perfect way to get your day started",
      price: "20 dh",
      image: sandwich,
    },
    {
      title: "Avocado Toast with Burrata",
      description: "Burrata brings avocado toast to the next level for a weekday-friendly lunch !!",
      price: "20 dh",
      image: burata,
    },
      {
      title: "Creamy Chia Smoothie",
      description: "add a healthy dose of fiber to keep you full and satisfied!!",
      price: "40 dh",
      image: jusChia,
    },
      {
      title: "Berry–Green Tea Smoothie",
      description: "nutrient-packed beverage with plenty of anti-inflammatory benefits!!",
      price: "25 dh",
      image: tea,
    },
  ];

    return (
    <Container maxWidth="lg" sx={{ pt: 5 }}>
      <Box textAlign="center" mb={3}>

        <Typography variant="h4" gutterBottom>
          The Menu
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.5rem", mt: 1 }}>
          Discover our range of healthy and delicious meals — ready to order!
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {menuItems.map((item, index) => (
          <Grid item key={index}>
            <Card
              elevation={3}
              sx={{
                width: 300,
                borderRadius: 2,
              }}
            >
              <CardMedia
                component="img"
                height="120"
                image={item.image}
                alt={item.title}
              />
              <CardContent sx={{ p: 1.5 }}>
                <Typography variant="subtitle1" fontWeight={700}>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "0.95rem", mt: 0.5 }}
                >
                  {item.description}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="primary"
                  sx={{ mt: 1, fontWeight: 600}}
                >
                  {item.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Menu;

