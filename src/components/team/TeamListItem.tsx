import React from "react";
import { useHistory } from "react-router-dom";
import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Team from "../../models/Team";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(8),
      height: theme.spacing(8),
      borderRadius: theme.spacing(1),
      marginRight: theme.spacing(2),
    },
    name: {
      marginRight: theme.spacing(1),
    },
    initial: {},
  })
);

interface Props {
  team?: Team;
}

function TeamListItem(props: Props) {
  const history = useHistory();
  const classes = useStyles();
  const team: Team = props.team || new Team();

  const onClickListItem = (id: number) => {
    history.push(`/myTeam/view?id=${id}`);
  };

  return (
    <ListItem button onClick={() => onClickListItem(team.id)} dense={true}>
      <ListItemAvatar>
        <Avatar alt={team.name} variant="square" src={team.image} className={classes.avatar}></Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <React.Fragment>
            <Typography component="span" variant="subtitle1" color="textPrimary" className={classes.name}>
              {team.name}
            </Typography>
            <Typography component="span" variant="caption" color="textSecondary" className={classes.initial}>
              {team.initial}
            </Typography>
          </React.Fragment>
        }
        secondary={
          <React.Fragment>
            <Typography component="span" variant="body2" color="textSecondary">
              {team.members}명
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
}

export default TeamListItem;
