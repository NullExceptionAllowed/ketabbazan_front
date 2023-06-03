import { useState } from "react";
import { Button, Paper, Divider, Dialog, IconButton } from "@mui/material";
import MainChat from "./mainChat";
import CloseIcon from "@mui/icons-material/Close";
import "./scrollbar.css";

const MainChatDialog = () => {
  const [dialogStatus, setDialogStatus] = useState(false);

  return (
    <div>
      <Button
        style={{ whiteSpace: "nowrap" }}
        onClick={() => setDialogStatus(true)}
      >
        گفت و گوها
      </Button>
      <Dialog
        onClose={() => {
          setDialogStatus(false);
        }}
        open={dialogStatus}
        style={{ width: "100%", height: "100%"}}
      >
        <div style={{ width: "100%", height: 720, background: "#e0e0e0" }}>
          <MainChat />
        </div>
      </Dialog>
    </div>
  );
};

export default MainChatDialog;
