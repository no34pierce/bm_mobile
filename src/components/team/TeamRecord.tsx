import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Button,
  Divider,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { withStyles, createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import MemberEdit from "./MemberEdit";
import Lineup from "./Lineup";
import StarsIcon from "@material-ui/icons/Stars";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabViews: {
      minHeight: "calc(100vh - 380px)",
    },
    controlBox: {
      padding: theme.spacing(1),
    },
    controlButton: {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
    },
    table: {
      width: "100%",
    },
    winIcon: {
      color: yellow[900],
    },
  })
);

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

function createData(
  team: string,
  result: string,
  run: number,
  hit: number,
  error: number,
  b_h: number
) {
  return { team, result, run, hit, error, b_h };
}

const rows = [
  createData("블랙 팬더스", "win", 8, 12, 1, 5),
  createData("삼성 라이온스", "lose", 6, 10, 3, 4),
];

function TeamRecord() {
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
    <Box className={classes.tabViews}>
      <Box display="flex" justifyContent="center" className={classes.controlBox}>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={handleAddMemberOpen}
          disableElevation
          className={classes.controlButton}
        >
          새 경기
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
      {/* <List>
        {memberList.map((member, index) => (
          <MemberListItem key={index} member={member} />
        ))}
      </List> */}
      <Box p={1}>
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small">
            <TableHead>
              <TableRow>
                <StyledTableCell>팀</StyledTableCell>
                <StyledTableCell align="right">R</StyledTableCell>
                <StyledTableCell align="right">H</StyledTableCell>
                <StyledTableCell align="right">E</StyledTableCell>
                <StyledTableCell align="right">B</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.team}{" "}
                    {row.result === "win" && (
                      <StarsIcon fontSize="inherit" className={classes.winIcon} />
                    )}
                  </TableCell>
                  <TableCell align="right">{row.run}</TableCell>
                  <TableCell align="right">{row.hit}</TableCell>
                  <TableCell align="right">{row.error}</TableCell>
                  <TableCell align="right">{row.b_h}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <MemberEdit open={addMemberOpen} onClose={handleAddMemberClose} />
      <Lineup open={lineupOpen} onClose={handleLineupClose} />
    </Box>
  );
}

export default TeamRecord;
