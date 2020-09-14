import React, { useState } from "react";
import {
  IconButton,
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Avatar,
  Select,
  MenuItem,
} from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
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
      position: "absolute",
      display: "block",
      height: 0,
      visibility: "hidden",
      maxHeight: "100px",
      // display: "none",
    },
  })
);

interface Props {
  player: Member;
}

function LineupStarterCard(props: Props) {
  const classes = useStyles();
  const { player = new Member() } = props;
  const [order, setOrder] = useState<string | number>(player.order || "");
  const [open, setOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setOrder(event.target.value as number);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item xs={3} md={2} lg={1}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          title={
            <Typography variant="subtitle2" color="textPrimary" component="div">
              {player.order === undefined ? "후보" : player.order + "번"}
            </Typography>
          }
          action={
            <IconButton edge="end" size="small" onClick={handleOpen} className={classes.headerIconButton}>
              <MoreVertIcon fontSize="small" />
            </IconButton>
          }
        />
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={order}
          onChange={handleChange}
          className={classes.selectOrder}
        >
          <MenuItem value={1} dense={true}>
            1번
          </MenuItem>
          <MenuItem value={2} dense={true}>
            2번
          </MenuItem>
          <MenuItem value={3} dense={true}>
            3번
          </MenuItem>
          <MenuItem value={4} dense={true}>
            4번
          </MenuItem>
          <MenuItem value={5} dense={true}>
            5번
          </MenuItem>
          <MenuItem value={6} dense={true}>
            6번
          </MenuItem>
          <MenuItem value={7} dense={true}>
            7번
          </MenuItem>
          <MenuItem value={8} dense={true}>
            8번
          </MenuItem>
          <MenuItem value={9} dense={true}>
            9번
          </MenuItem>
          <MenuItem value={10} dense={true}>
            10번
          </MenuItem>
          <MenuItem value={11} dense={true}>
            11번
          </MenuItem>
          <MenuItem value={12} dense={true}>
            12번
          </MenuItem>
          <MenuItem value="" dense={true}>
            후보
          </MenuItem>
        </Select>
        <CardContent className={classes.cardContent}>
          <Avatar src={player.image} className={classes.avatar} />
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Typography variant="button" color="textPrimary" component="div" className={classes.name}>
            {player.name}
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default LineupStarterCard;
