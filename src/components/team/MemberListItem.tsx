import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  Typography,
  IconButton,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Member from "../../models/Member";
import MemberEdit from "./MemberEdit";

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
      fontWeight: 600
    },
    subPrimary: {},
    secondaryItem: {
      marginRight: theme.spacing(1),
    },
  })
);

interface Props {
  member: Member;
}

function MemberListItem(props: Props) {
  const classes = useStyles();
  const { member } = props;
  const [editMemberOpen, setEditMemberOpen] = useState(false);

  const handleEditMemberOpen = () => {
    setEditMemberOpen(true);
  };

  const handleEditMemberClose = () => {
    setEditMemberOpen(false);
  };

  return (
    <>
      <ListItem dense={true} className={classes.listItem}>
        <ListItemAvatar>
          <Avatar alt={member.name} src={member.image} className={classes.avatar}></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                component="span"
                variant="caption"
                color="textPrimary"
                align="right"
                className={classes.number}
              >
                {member.number}
              </Typography>
              <Typography component="span" variant="subtitle1" color="textPrimary" className={classes.name}>
                {member.name}
              </Typography>
              <Typography component="span" variant="caption" color="textSecondary" className={classes.subPrimary}>
                {member.position}
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography component="span" variant="caption" color="textPrimary" className={classes.secondaryItem}>
                타율 {member.avg}
              </Typography>
              <Typography component="span" variant="caption" color="textPrimary" className={classes.secondaryItem}>
                방어율 {member.era}
              </Typography>
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="option" onClick={handleEditMemberOpen}>
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <MemberEdit open={editMemberOpen} onClose={handleEditMemberClose} />
    </>
  );
}

export default MemberListItem;
