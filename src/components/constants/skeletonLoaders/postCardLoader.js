import * as React from "react";
import Box from '@mui/material/Box';
import {Skeleton }from '@mui/material';
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      width: "100%",
      backgroundColor: "rgba(255 255 255/0.8)",
      borderRadius: "5px",
      display: "flex",
      flexDirection: "column",
      padding: "15px 15px",
      boxSizing: "border-box",
      marginTop: "10px",
    },

    topBox: {
      display: "flex",
      margin: "0%",
      padding: "0%",
    },

    topContent: {
      marginLeft: "15px",
    },

    skeleton: {
      margin: "0%",
      padding: "0%",
    },
  })
);

export default function Animations() {
  const classes = useStyles();
  return (
    <Box width="100%" mt={5}>
      {[...Array(2)].map(() => {
        return (
          <Box className={classes.container}>
            <Box className={classes.topBox}>
              <Skeleton
                variant="circular"
                width={50}
                height={50}
                animation="pulse"
              />
              <Box className={classes.topContent}>
                <Skeleton animation="pulse" height={15} width="150px" />
                <Skeleton height={15} animation="pulse" width="200px" />
              </Box>
            </Box>
            <Skeleton className={classes.skeleton} animation="wave" height={200} width="100%" />
          </Box>
        );
      })}
    </Box>
  );
}
