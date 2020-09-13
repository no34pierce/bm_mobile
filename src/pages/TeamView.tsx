import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  Divider,
} from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import TeamViewTabs from "../components/team/TeamViewTabs";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    teamBox: {
      // marginBottom: theme.spacing(1),
    },
    teamCard: {
      border: 0,
      borderRadius: 0,
    },
    teamCardHeader: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    teamAvatar: {
      // width: theme.spacing(5),
      // height: theme.spacing(5),
      borderRadius: theme.spacing(1),
    },
    image: {
      height: theme.spacing(18),
    },
    contentName: {
      marginRight: theme.spacing(1),
    },
  })
);

const team = {
  id: 3,
  logo: "/images/teams/logos/blackpandas_logo.jpeg",
  image: "/images/teams/logos/blackpandas_logo.jpeg",
  name: "블랙팬더스",
  initial: "BLPDS",
  members: 13,
  manager: "유용환",
};

function TeamView() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.teamBox}>
        <Card variant="outlined" className={classes.teamCard}>
          <CardHeader
            avatar={<Avatar alt={team.initial} src={team.logo} className={classes.teamAvatar} />}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={team.name}
            subheader={
              <Typography variant="caption" component="span" color="textSecondary">
                {team.initial}
              </Typography>
            }
            className={classes.teamCardHeader}
          />
          <CardActionArea>
            <CardMedia image={team.image} title={team.name} className={classes.image} />
            <CardContent>
              <Box>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="span"
                  color="textPrimary"
                  className={classes.contentName}
                >
                  감독
                </Typography>
                <Typography gutterBottom variant="body2" component="span" color="textSecondary">
                  {team.manager}
                </Typography>
              </Box>
              <Box>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="span"
                  color="textPrimary"
                  className={classes.contentName}
                >
                  팀원
                </Typography>
                <Typography gutterBottom variant="body2" component="span" color="textSecondary">
                  {team.members}명
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <Divider />
      <Box>
        <TeamViewTabs />
      </Box>
    </>
  );
}

export default TeamView;
