import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlinedIcon from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatBubbleRounded from "@mui/icons-material/ChatBubbleRounded";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Text Generation
          </Typography>
          <Card
            onClick={() => {
              navigate("/summary");
            }}
            sx={{
              height: 190,
              width: 200,
              boxShadow: 2,
              borderRadius: 5,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.main",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded sx={{ fontSize: "80px", mt: 2, ml: 2 }} />
            <Stack p={1} pl={2}>
              <Typography variant="h5" fontWeight="bold">
                Text Summary
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Paragraph Generation
          </Typography>
          <Card
            onClick={() => {
              navigate("/Paragraph");
            }}
            sx={{
              height: 190,
              width: 200,
              boxShadow: 2,
              borderRadius: 5,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.main",
                cursor: "pointer",
              },
            }}
          >
            <FormatAlignLeftOutlinedIcon
              sx={{ fontSize: "80px", mt: 2, ml: 2 }}
            />
            <Stack p={1} pl={2}>
              <Typography variant="h5" fontWeight="bold">
                Paragraph
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            AI ChatBot
          </Typography>
          <Card
            onClick={() => {
              navigate("/AIBot");
            }}
            sx={{
              height: 190,
              width: 200,
              boxShadow: 2,
              borderRadius: 5,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.main",
                cursor: "pointer",
              },
            }}
          >
            <ChatBubbleRounded sx={{ fontSize: "80px", mt: 2, ml: 2 }} />
            <Stack p={1} pl={2}>
              <Typography variant="h5" fontWeight="bold">
                ChatBot
              </Typography>
            </Stack>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
