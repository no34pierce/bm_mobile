import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  Typography,
  IconButton,
  Select,
  MenuItem,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Member from "../../models/Member";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    itemLink: {
      borderRadius: 0,
      padding: theme.spacing(0),
    },
    listItem: {
      // paddingLeft: 0,
      // paddingRight: 0,
      width: "100%",
    },
    avatar: {
      width: theme.spacing(5),
      height: theme.spacing(5),
      marginRight: theme.spacing(2),
    },
    number: {
      display: "inline-block",
      width: theme.spacing(3),
      marginRight: theme.spacing(1),
    },
    name: {
      marginRight: theme.spacing(1),
    },
    subPrimary: {},
    secondaryItem: {
      marginRight: theme.spacing(1),
    },
    selectOrder: {
      position: "absolute",
      display: "block",
      height: 0,
      visibility: "hidden",
      maxHeight: "100px",
    },
  })
);

interface Props {
  player?: Member;
}

function LineupSubListItem(props: Props) {
  const classes = useStyles();
  const player: Member = props.player || new Member();
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
    <ListItem dense={true} className={classes.listItem}>
      <ListItemAvatar>
        <Avatar alt={player.name} src={player.image} className={classes.avatar}></Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <React.Fragment>
            <Typography component="span" variant="body1" color="textPrimary" align="center" className={classes.number}>
              {player.number}
            </Typography>
            <Typography component="span" variant="subtitle1" color="textPrimary" className={classes.name}>
              {player.name}
            </Typography>
            <Typography component="span" variant="caption" color="textSecondary" className={classes.subPrimary}>
              {player.position}
            </Typography>
          </React.Fragment>
        }
        secondary={
          <React.Fragment>
            <Typography component="span" variant="caption" color="textPrimary" className={classes.secondaryItem}>
              타율 {player.avg}
            </Typography>
          </React.Fragment>
        }
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="option" onClick={handleOpen}>
          <MoreVertIcon />
        </IconButton>
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
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default LineupSubListItem;
