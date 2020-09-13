import React from "react";
import {
  Button,
  Divider,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Box,
  TextField,
  Avatar,
  InputLabel,
} from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import AssistantPhotoOutlinedIcon from "@material-ui/icons/AssistantPhotoOutlined";
import { TransitionProps } from "@material-ui/core/transitions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    avatar: {
      width: theme.spacing(8),
      height: theme.spacing(8),
      borderRadius: theme.spacing(1),
      margin: "auto",
    },
    fileInput: {
      display: "none",
    },
    imageEditBtn: {
      margin: "auto",
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

function TeamEdit(props: Props) {
  const classes = useStyles();
  const { open, onClose } = props;

  return (
    <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
            <CloseIcon fontSize="large" />
          </IconButton>
          <Typography variant="body1" className={classes.title}>
            팀 등록
          </Typography>
          <Button autoFocus color="inherit" onClick={onClose}>
            저장
          </Button>
        </Toolbar>
      </AppBar>
      <Box>
        <Box p={2}>
          <InputLabel shrink={true}>팀 로고</InputLabel>
          <Avatar alt="photo" variant="square" src="" className={classes.avatar}>
            <AssistantPhotoOutlinedIcon />
          </Avatar>
          <Box textAlign="center">
            <input accept="image/*" className={classes.fileInput} id="button-edit-image" type="file" />
            <label htmlFor="button-edit-image">
              <Button size="small" color="primary" component="span">
                수정하기
              </Button>
            </label>
          </Box>
        </Box>
        <Divider />
        <Box p={2}>
          <TextField
            label="팀 이름"
            defaultValue=""
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            required
            fullWidth
          />
        </Box>
        <Divider />
        <Box p={2}>
          <TextField
            label="이니셜"
            defaultValue=""
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            required
            fullWidth
          />
        </Box>
        <Divider />
      </Box>
    </Dialog>
  );
}

export default TeamEdit;
