import * as React from "react";
import Box from "@mui/material/Box";
import {Skeleton} from "@mui/material";
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
  })
);

export default function Animations() {
  const classes = useStyles();
  return (
    <Box width="100%" mt={3}>
      {[...Array(3)].map((id) => {
        return (
          <Box className={classes.container} key={id}>
            <Box className={classes.topBox}>
              <Skeleton
                variant="circular"
                width={40}
                height={40}
                animation="pulse"
              />
              <Box className={classes.topContent}>
                <Skeleton animation="pulse" height={15} width="90px" />
                <Skeleton height={15} animation="pulse" width="120px" />
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
