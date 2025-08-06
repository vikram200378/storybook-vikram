import type { Meta, StoryObj } from "@storybook/react";
import { Box, Typography } from "@mui/material";
import { SuggestedActions } from "../../molecules/SuggestedActions/SuggestedActions";
import { FileArray } from "../../molecules/FileArray/FileArray";
import { ChatTopbar } from "../../atoms/ChatTopBar/ChatTopbar";
import LightIcon from "../../../assets/light.svg";
import ChatInput from "../../atoms/ChatInput/ChatInput";
import { Page } from "../../atoms/Page/Page";
import SentChat from "../../atoms/SentChat/SentChat";
import { ChatFeedback } from "../../atoms/ChatFeedback/ChatFeedback";
import { useState } from "react";

const meta: Meta = {
  title: "Organisms/ChatPanel",
  args: {
    content: false,
  },
  argTypes: {
    content: {
      control: "boolean",
    },
  },
};

export default meta;

export const Default: StoryObj = {
  render(args: any) {
    const [message, setMessage] = useState("");

    const handleSend = () => {
      alert(`Sending message: ${message}`);
      setMessage("");
    };

    return (
      <>
        <Box
          component="section"
          sx={{
            width: "100%",
            maxWidth: "466px",
            maxHeight: "1023px",
            borderRadius: "0px 28px 28px 0px",
            padding: "24px",
            boxShadow: "0px 16px 24px 2px rgba(0, 0, 0, 0.2)",
            margin: "0 auto",
          }}
        >
          <ChatTopbar />

          {!args?.content ? (
            <Box
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "450px",
              }}
            >
              <img
                src={LightIcon}
                alt="light"
                width="300px"
                height="300px"
                style={{ objectFit: "contain" }}
              />
            </Box>
          ) : (
            <Box
              component="div"
              sx={{
                height: "450px",
                display: "flex",
                alignItems: "end",
                width: "100%",
              }}
            >
              <Box component="div" flexGrow={1}>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    alignItems: "flex-end",
                  }}
                >
                  <Page truncated={false} />

                  <SentChat
                    message={"How many messages am I assigned to currently"}
                  />
                </Box>

                <Typography variant="body1" component="p" marginTop={2}>
                  You're currently assigned to 10 messages. <br />
                  <ChatFeedback type="default" />
                </Typography>
              </Box>
            </Box>
          )}

          <Box component="div" sx={{ my: 1.5 }}>
            <SuggestedActions expanded={false} />
          </Box>

          <Box component="div" sx={{ mb: 2 }}>
            <FileArray />
          </Box>

          <Box component="div" sx={{ px: 1 }}>
            <ChatInput
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onSend={handleSend}
            />
          </Box>
        </Box>
      </>
    );
  },
};
