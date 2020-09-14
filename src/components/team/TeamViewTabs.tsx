import React from "react";
import SwipeableViews from "react-swipeable-views";
import { Tabs, Tab, Box, Divider } from "@material-ui/core";
import { createStyles, Theme, makeStyles, useTheme } from "@material-ui/core/styles";
import MemberManage from "./MemberManage";
import GameManage from "./GameManage";
import TeamRecord from "./TeamRecord";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: "100%",
    },
  })
);

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Box>{children}</Box>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function TeamViewTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box className={classes.root}>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" variant="fullWidth">
        <Tab label="팀원 관리" {...a11yProps(0)} />
        <Tab label="게임 관리" {...a11yProps(1)} />
        <Tab label="팀 기록" {...a11yProps(2)} />
      </Tabs>
      <Divider />
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <MemberManage />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <GameManage />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <TeamRecord />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

export default TeamViewTabs;
