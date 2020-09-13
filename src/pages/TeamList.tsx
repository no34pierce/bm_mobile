import React, { useState } from "react";
import { Box, List, Fab } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import TeamListItem from "../components/team/TeamListItem";
import TeamEdit from "../components/team/TeamEdit";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: "fixed",
      bottom: theme.spacing(3),
      right: theme.spacing(3),
      marginBottom: theme.spacing(7),
    },
    teamList: {},
  })
);

const teamList = [
  {
    id: 0,
    image: "/images/teams/logos/twins_logo.jpg",
    name: "엘지 트윈스",
    initial: "TWINS",
    members: 15,
  },
  {
    id: 1,
    image: "/images/teams/logos/bears_logo.jpg",
    name: "두산 베어스",
    initial: "BEARS",
    members: 17,
  },
  {
    id: 2,
    image: "/images/teams/logos/lions_logo.png",
    name: "삼성 라이온스",
    initial: "LIONS",
    members: 21,
  },
];

function TeamList() {
  const classes = useStyles();
  const [addTeamOpen, setAddTeamOpen] = useState(false);

  const handleAddTeamOpen = () => {
    setAddTeamOpen(true);
  };

  const handleAddTeamClose = () => {
    setAddTeamOpen(false);
  };

  return (
    <Box>
      <List className={classes.teamList}>
        {teamList.map((team, index) => (
          <TeamListItem key={index} team={team} />
        ))}
      </List>
      <Fab aria-label="Add" onClick={handleAddTeamOpen} className={classes.fab} color="primary" size="large">
        <AddIcon />
      </Fab>
      <TeamEdit open={addTeamOpen} onClose={handleAddTeamClose} />
    </Box>
  );
}

export default TeamList;
