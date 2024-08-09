import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, ListItemIcon, ListItemText, MenuList, Paper, Typography } from '@mui/material';
import { AccountTree, EmojiEvents, Person, WorkHistory } from '@mui/icons-material';

export const CollapseMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="long-button"
        aria-label="more"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >

          <MenuList sx={{ width: '320px', maxWidth: '100%' }}>
            <MenuItem>
              <ListItemIcon>
                <Person fontSize="small" />
              </ListItemIcon>
              <ListItemText>Sobre mi</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘S
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <WorkHistory fontSize="small" />
              </ListItemIcon>
              <ListItemText>Experiencia Profesional</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘E
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <EmojiEvents fontSize="small" />
              </ListItemIcon>
              <ListItemText>Programacion competitiva</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘P
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <AccountTree fontSize="small" />
              </ListItemIcon>
              <ListItemText>Projectos personales</ListItemText>
            </MenuItem>
          </MenuList>
      </Menu>
    </div>
  );
}
