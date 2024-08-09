import { Close, Mail } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Icon, IconButton, TextField } from "@mui/material";
import { FormEvent, useState } from "react";

export const TalkWithMe = () => {
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log("Formulario enviado");
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        Habla conmigo
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <IconButton sx={{display:"flex",justifyContent:"end", marginBottom:"0px"}} onClick={handleClose}>
          <Close />
        </IconButton>
        <DialogTitle className="twm-form-title">¡Conversemos!</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nombre"
              type="text"
              fullWidth
              variant="outlined"
              required
            />
            <TextField
              margin="dense"
              id="mail"
              label="Correo electrónico"
              type="email"
              fullWidth
              variant="outlined"
              required
            />
            <TextField
              margin="dense"
              id="subject"
              label="Asunto"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="message"
              label="Mensaje"
              type="text"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              required
            />
            <Button className="twm-submit-button" type="submit" >
              Enviar
            </Button>
            <div className="twm-email">
              <Mail fontSize="small" className="twm-mail-icon"/>
              juan.suarez1@utp.edu.co
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}