import React, { useState } from "react";
import { Box, List, Button, Divider } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import MemberListItem from "./MemberListItem";
import MemberEdit from "./MemberEdit";
import Lineup from "./Lineup";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    controlBox: {
      padding: theme.spacing(1),
    },
    controlButton: {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
    },
  })
);

const memberList = [
  {
    id: 0,
    image: "/images/teams/logos/twins_logo.jpg",
    name: "정광필",
    type: "player",
    number: "31",
    position: "투수",
    throwing: "우투",
    hitting: "우타",
    avg: "0.333",
    era: "3.78",
  },
  {
    id: 1,
    image: "",
    name: "유용환",
    type: "player",
    number: "1",
    position: "포수",
    throwing: "우투",
    hitting: "우타",
    avg: "0.356",
    era: "0",
  },
  {
    id: 2,
    image: "",
    name: "권기철",
    type: "player",
    number: "24",
    position: "유격수",
    throwing: "우투",
    hitting: "우타",
    avg: "0.299",
    era: "1.02",
  },
  {
    id: 3,
    image: "",
    name: "김용한",
    type: "player",
    number: "7",
    position: "2루수",
    throwing: "우투",
    hitting: "우타",
    avg: "0.301",
    era: "0",
  },
  {
    id: 4,
    image: "",
    name: "이재호",
    type: "player",
    number: "32",
    position: "투수",
    throwing: "우투",
    hitting: "우타",
    avg: "0.295",
    era: "2.25",
  },
  {
    id: 5,
    image: "",
    name: "유용수",
    type: "player",
    number: "17",
    position: "중견수",
    throwing: "우투",
    hitting: "우타",
    avg: "0.278",
    era: "0",
  },
  {
    id: 6,
    image: "",
    name: "허성용",
    type: "player",
    number: "100",
    position: "1루수",
    throwing: "우투",
    hitting: "우타",
    avg: "0.288",
    era: "0",
  },
  {
    id: 7,
    image: "/images/teams/logos/twins_logo.jpg",
    name: "박진수",
    type: "player",
    number: "31",
    position: "투수",
    throwing: "우투",
    hitting: "우타",
    avg: "0.333",
    era: "3.78",
  },
  {
    id: 8,
    image: "",
    name: "김현준",
    type: "player",
    number: "1",
    position: "좌익수",
    throwing: "우투",
    hitting: "우타",
    avg: "0.356",
    era: "0",
  },
  {
    id: 9,
    image: "",
    name: "이봉석",
    type: "player",
    number: "24",
    position: "투수",
    throwing: "우투",
    hitting: "우타",
    avg: "0.299",
    era: "1.02",
  },
  {
    id: 10,
    image: "",
    name: "이준호",
    type: "player",
    number: "7",
    position: "우익수",
    throwing: "우투",
    hitting: "우타",
    avg: "0.301",
    era: "0",
  },
  {
    id: 11,
    image: "",
    name: "유용섭",
    type: "player",
    number: "17",
    position: "1루수",
    throwing: "우투",
    hitting: "우타",
    avg: "0.278",
    era: "0",
  },
  {
    id: 12,
    image: "",
    name: "정기홍",
    type: "player",
    number: "100",
    position: "투수",
    throwing: "우투",
    hitting: "우타",
    avg: "0.288",
    era: "0",
  },
  {
    id: 13,
    image: "",
    name: "한창범",
    type: "player",
    number: "100",
    position: "유격수",
    throwing: "우투",
    hitting: "우타",
    avg: "0.371",
    era: "0",
  },
  {
    id: 14,
    image: "",
    name: "이근우",
    type: "player",
    number: "100",
    position: "포수",
    throwing: "우투",
    hitting: "우타",
    avg: "0.388",
    era: "0",
  },
];

function MemberManage() {
  const classes = useStyles();
  const [addMemberOpen, setAddMemberOpen] = useState(false);
  const [lineupOpen, setLineupOpen] = useState(false);

  const handleAddMemberOpen = () => {
    setAddMemberOpen(true);
  };

  const handleAddMemberClose = () => {
    setAddMemberOpen(false);
  };

  const handleLineupOpen = () => {
    setLineupOpen(true);
  };

  const handleLineupClose = () => {
    setLineupOpen(false);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="center" className={classes.controlBox}>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={handleAddMemberOpen}
          disableElevation
          className={classes.controlButton}
        >
          팀원 등록
        </Button>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={handleLineupOpen}
          disableElevation
          className={classes.controlButton}
        >
          라인업 관리
        </Button>
      </Box>
      <Divider />
      <List>
        {memberList.map((member, index) => (
          <MemberListItem key={index} member={member} />
        ))}
      </List>
      <MemberEdit open={addMemberOpen} onClose={handleAddMemberClose} />
      <Lineup open={lineupOpen} onClose={handleLineupClose} />
    </Box>
  );
}

export default MemberManage;
