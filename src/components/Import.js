import React from "react";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";

const Import = (props) => {
  // fill out this component
  const [anchorEl, setAnchorEl] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    console.log(event.currentTarget);
    setIsVisible(true);
    setAnchorEl(true);
  };

  const handleClose = () => {
    setAnchorEl(!anchorEl);
  };

  React.useEffect(() => {
    console.log(isVisible);
  }, [isVisible]);

  return (
    <>
      <Button variant="contained" color="primary" onClick={props.fetchMakes}>
        Import
      </Button>
      <h2>{`Count: ${props.makes.length}`}</h2>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Makes</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((make) => (
            <TableRow>
              <TableCell align="right">{make.MakeId}</TableCell>
              <TableCell align="right">{make.MakeName}</TableCell>
              <TableCell align="right">
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  Dashboard
                </Button>
                {isVisible && (
                  <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    // keepMountedopen={open}
                    onClose={handleClose}
                  >
                    <MenuItem key="1">delete</MenuItem>
                  </Menu>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
    </>
  );
};

export default Import;
