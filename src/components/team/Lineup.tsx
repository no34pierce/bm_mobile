import React, { useState, useEffect } from "react";
import { Divider, Dialog, AppBar, Toolbar, IconButton, Typography, Slide, Box, Grid, List } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import { TransitionProps } from "@material-ui/core/transitions";
import LineupStarterCard from "./LineupStarterCard";
import LineupSubListItem from "./LineupSubListItem";
import Member from "../../models/Member";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    subtitle1: {
      padding: theme.spacing(0),
      // paddingTop: 0,
      // paddingBottom: 0,
    },
    subtitle2: {
      padding: theme.spacing(1),
      paddingBottom: 0,
    },
    card: {
      // padding: 0,
    },
    cardHeader: {
      padding: theme.spacing(1),
      paddingBottom: theme.spacing(0),
    },
    headerIconButton: {
      paddingTop: theme.spacing(1),
    },
    cardContent: {
      padding: theme.spacing(1),
      textAlign: "center",
    },
    avatar: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      margin: "auto",
    },
    cardActions: {
      textAlign: "center",
      paddingTop: 0,
    },
    name: {
      margin: "auto",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    selectOrder: {
      display: "none",
    },
    subList: {
      padding: 0,
    },
  })
);

interface Props {
  open: boolean;
  onClose: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const lineup: Member[] = [
  {
    id: 0,
    order_id: 1,
    order: "1",
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
    order_id: 2,
    order: "2",
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
    order_id: 3,
    order: "3",
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
    order_id: 4,
    order: "4",
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
    order_id: 5,
    order: "5",
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
    order_id: 6,
    order: "6",
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
    order_id: 7,
    order: "7",
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
    order_id: 8,
    order: "8",
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
    order_id: 9,
    order: "9",
    image: "",
    name: "김현준",
    type: "player",
    number: "1",
    position: "포수",
    throwing: "우투",
    hitting: "우타",
    avg: "0.356",
    era: "0",
  },
  {
    id: 9,
    order_id: 10,
    order: "10",
    image: "",
    name: "이봉석",
    type: "player",
    number: "24",
    position: "유격수",
    throwing: "우투",
    hitting: "우타",
    avg: "0.299",
    era: "1.02",
  },
  {
    id: 10,
    order_id: 11,
    order: "11",
    image: "",
    name: "이준호",
    type: "player",
    number: "7",
    position: "2루수",
    throwing: "우투",
    hitting: "우타",
    avg: "0.301",
    era: "0",
  },
  {
    id: 11,
    order_id: 12,
    order: "12",
    image: "",
    name: "유용섭",
    type: "player",
    number: "32",
    position: "투수",
    throwing: "우투",
    hitting: "우타",
    avg: "0.295",
    era: "2.25",
  },
];

const playerList: Member[] = [
  {
    id: 0,
    order_id: 1,
    order: "1",
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
    order_id: 2,
    order: "2",
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
    order_id: 3,
    order: "3",
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
    order_id: 4,
    order: "4",
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
    order_id: 5,
    order: "5",
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
    order_id: 6,
    order: "6",
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
    order_id: 7,
    order: "7",
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
    order_id: 8,
    order: "8",
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
    order_id: 9,
    order: "9",
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
    order_id: 10,
    order: "10",
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
    order_id: 11,
    order: "11",
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
    order_id: 12,
    order: "12",
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
    order_id: "",
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
    order_id: "",
    image: "",
    name: "한창범",
    type: "player",
    number: "6",
    position: "유격수",
    throwing: "우투",
    hitting: "우타",
    avg: "0.371",
    era: "0",
  },
  {
    id: 14,
    order_id: "",
    image: "",
    name: "이근우",
    type: "player",
    number: "2",
    position: "포수",
    throwing: "우투",
    hitting: "우타",
    avg: "0.388",
    era: "0",
  },
];

function Lineup(props: Props) {
  const classes = useStyles();
  const { open, onClose } = props;
  const [subPlayerList, setSubPlayerList] = useState(Array<Member>());

  useEffect(() => {
    let tempPlayerList: Member[] = Array<Member>();
    playerList.map((player) => {
      lineup.map((starter) => {
        if (player.id === starter.id) {
          tempPlayerList.push(player);
        }
      });
    });
    tempPlayerList = playerList.filter((player) => !tempPlayerList.includes(player));
    setSubPlayerList(tempPlayerList);
  }, []);

  return (
    <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="body1" className={classes.title}>
            라인업 관리
          </Typography>
          {/* <Button autoFocus color="inherit" onClick={onClose}>
            저장
          </Button> */}
        </Toolbar>
      </AppBar>
      <Box>
        <Box p={2}>
          <Typography variant="body1" component="div" gutterBottom className={classes.subtitle1}>
            선발 라인업
          </Typography>
          <Grid container spacing={1}>
            {lineup.map((player, index) => (
              <LineupStarterCard key={index} player={player} />
            ))}
          </Grid>
        </Box>
        <Divider />
        <Box p={1}>
          <Typography variant="body1" component="div" className={classes.subtitle2}>
            후보 선수
          </Typography>
          <List className={classes.subList}>
            {subPlayerList.map((player: Member, index: number) => (
              <LineupSubListItem key={index} player={player} />
            ))}
          </List>
        </Box>
      </Box>
    </Dialog>
  );
}

export default Lineup;
