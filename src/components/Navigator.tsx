import React, { useState, useEffect } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AssistantPhotoOutlinedIcon from "@material-ui/icons/AssistantPhotoOutlined";
import SportsHandballOutlinedIcon from "@material-ui/icons/SportsHandballOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bottomNavigation: {
      position: "fixed",
      width: "100%",
      top: "auto",
      bottom: 0,
      boxShadow: "5px -2px 3px 0px rgba(0, 0, 0, 0.1)",
      borderTop: "1px solid rgba(0, 0, 0, 0.12)",
    },
    link: {
      color: "#3f51b5",
    },
  })
);

const menu = [
  {
    id: 0,
    link: "/home",
    label: "홈",
    icon: <HomeOutlinedIcon />,
  },
  {
    id: 1,
    link: "/myTeam",
    label: "내 팀",
    icon: <AssistantPhotoOutlinedIcon />,
  },
  {
    id: 2,
    link: "/myGame",
    label: "내 게임",
    icon: <SportsHandballOutlinedIcon />,
  },
  {
    id: 3,
    link: "/myRecord",
    label: "내 기록",
    icon: <AssignmentOutlinedIcon />,
  },
  {
    id: 4,
    link: "/myInfo",
    label: "내 정보",
    icon: <AccountCircleOutlinedIcon />,
  },
];

function Navigator() {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  let id = 0;
  menu.map((item) => {
    if (location.pathname.indexOf(item.link) > -1) {
      id = item.id;
    }
  });
  const [value, setValue] = useState(id);

  useEffect(() => {
    menu.map((item) => {
      if (location.pathname.indexOf(item.link) > -1) {
        setValue(item.id);
      }
    });
  }, [location]);

  const onClickAction = (event: React.ChangeEvent<{}>, value: any) => {
    history.replace(menu[value].link);
    setValue(value);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        onClickAction(event, newValue);
      }}
      showLabels
      className={classes.bottomNavigation}
    >
      {menu.map((item, index) => (
        <BottomNavigationAction key={index} label={item.label} icon={item.icon} />
      ))}
    </BottomNavigation>
  );
}

export default Navigator;
