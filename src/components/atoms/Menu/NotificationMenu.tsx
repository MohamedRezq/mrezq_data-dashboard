import React from "react";
//-----> Components <-----------------------------------------//
import Menu, { Item as MenuItem } from "rc-menu";
//-----> Redux <----------------------------------------------//

//-----> Assets <---------------------------------------------//

//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const NotificationMenu = () => {
  return (
    <Menu className="px-4" onSelect={() => {}}>
      {["Notification 1", "Notification 2"].map((item, i) => (
        <MenuItem
          key={`${item}-${i}`}
          className="hover:bg-hippiegreen hover:text-white text-dovegray cursor-pointer text-xs font-semibold"
        >
          {item}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default NotificationMenu;
