import { Box } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <div>
      <Box
        sx={{
          marginTop: "3%",
          bgcolor: "#e5e7eb",
          paddingY: "1%",
          textAlign: "center ",
        }}
      >
        Copyright © 2023 itstore. Powered by itstore.
      </Box>
    </div>
  );
}
