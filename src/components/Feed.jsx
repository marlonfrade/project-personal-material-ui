import React from "react";

import { Box } from "@mui/system";
import Post from "./Post";

function Feed() {
  return (
    <Box flex={4} p={2}>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </Box>
  );
}

export default Feed;
