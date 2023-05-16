import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

type Dialogprops = {
  openDialog: boolean;
  handleClosePolicy: () => void;
};

export default function DialogReg(props: Dialogprops) {
  const { openDialog, handleClosePolicy } = props;

  return (
    <div>
      <Dialog open={openDialog} onClose={handleClosePolicy}>
        <Box sx={{bgcolor:"black" , color:"gray"}}>
          <DialogTitle sx={{color:"white" , fontSize:"27px" , fontWeight:"600"}}>Terms of service</DialogTitle>
          <DialogContent>
            <Box
              sx={{ width: "110%", maxWidth: 360 }}
            >
              <List>
                <ListItem disablePadding>
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, nesciunt molestiae? Voluptas veritatis totam eaque
                    aspernatur animi quo reiciendis amet reprehenderi.
                  </Typography>
                </ListItem>
              </List>
              <List>
                <ListItem disablePadding>
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, nesciunt molestiae? Voluptas veritatis totam eaque
                    aspernatur animi quo reiciendis amet reprehenderi.
                  </Typography>
                </ListItem>
              </List>
              <List>
                <ListItem disablePadding>
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, nesciunt molestiae? Voluptas veritatis totam eaque
                    aspernatur animi quo reiciendis amet reprehenderi.
                  </Typography>
                </ListItem>
              </List>
              <List>
                <ListItem disablePadding>
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, nesciunt molestiae? Voluptas veritatis totam eaque
                    aspernatur animi quo reiciendis amet reprehenderi.
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClosePolicy}>Agree</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}
