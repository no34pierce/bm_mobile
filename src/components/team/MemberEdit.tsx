import React, { useState } from "react";
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
  Select,
  MenuItem,
} from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
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

function MemberEdit(props: Props) {
  const classes = useStyles();
  const { open, onClose } = props;
  const [type, setType] = useState("1");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as string);
  };

  return (
    <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="body1" className={classes.title}>
            팀원 등록
          </Typography>
          <Button autoFocus color="inherit" onClick={onClose}>
            저장
          </Button>
        </Toolbar>
      </AppBar>
      <Box>
        <Box p={2}>
          <InputLabel shrink={true}>사진</InputLabel>
          <Avatar alt="photo" variant="square" src="" className={classes.avatar}></Avatar>
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
            label="이름"
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
          <InputLabel shrink={true} required id="type-label">
            포지션
          </InputLabel>
          <Select labelId="type-label" value={type} onChange={handleChange} required fullWidth>
            <MenuItem value="">선택</MenuItem>
            <MenuItem value={1}>투수</MenuItem>
            <MenuItem value={2}>포수</MenuItem>
            <MenuItem value={3}>1루수</MenuItem>
            <MenuItem value={4}>2루수</MenuItem>
            <MenuItem value={5}>3루수</MenuItem>
            <MenuItem value={6}>유격수</MenuItem>
            <MenuItem value={7}>좌익수</MenuItem>
            <MenuItem value={8}>중견수</MenuItem>
            <MenuItem value={9}>우익수</MenuItem>
            <MenuItem value={10}>지명타자</MenuItem>
            <MenuItem value={99}>스탭</MenuItem>
          </Select>
        </Box>
        <Divider />
        <Box p={2}>
          <TextField
            label="등번호"
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
          <InputLabel shrink={true} id="hitting-label" required>
            타격
          </InputLabel>
          <Select labelId="hitting-label" value={type} onChange={handleChange} required fullWidth>
            <MenuItem value={1}>우타</MenuItem>
            <MenuItem value={2}>좌타</MenuItem>
            <MenuItem value={2}>스위치</MenuItem>
          </Select>
        </Box>
        <Divider />
        <Box p={2}>
          <InputLabel shrink={true} id="throwing-label" required>
            투구
          </InputLabel>
          <Select labelId="throwing-label" value={type} onChange={handleChange} required fullWidth>
            <MenuItem value={1}>우투</MenuItem>
            <MenuItem value={2}>좌투</MenuItem>
          </Select>
        </Box>
        <Divider />
      </Box>
    </Dialog>
  );
}

export default MemberEdit;
