import React from "react";
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import MailIcon from '@mui/icons-material/Mail';
import { sections } from "../../Data/Data";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import Divider from '@mui/material/Divider';

export default function SideDrawer({ children }) {
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      // className={clsx(list, {
      //   [fullList]: anchor === "top" || anchor === "bottom",
      // })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>Categories</ListItem>
      </List>
      <Divider />
      <List>
        {sections.map((text, index) => (
          <ListItem button key={text.title}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div> 
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>{children}</Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

