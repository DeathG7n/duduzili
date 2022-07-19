import React, { useEffect, useState } from "react";

import {
  DropDown1,
  DropDownContent,
  DropDownBox,
  Button,
} from "./moreDropDownStyles";
import user from "../../../../assets/user-plus.svg";
import flag from "../../../../assets/flag.svg";
import blocked from "../../../../assets/blocked.svg";
import volume from "../../../../assets/volume.svg";

const Index = ({ openModal }) => {
  const [windowSize, setWindowSize] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 800) {
      setWindowSize(false);
    } else {
      setWindowSize(true);
    }
  });

  return (
    <>
      {windowSize && (
        <DropDownBox>
          <DropDown1 className="dropdown">
            <DropDownContent>
              <img src={user} alt="icon" />
              <p>Follow @duduzili</p>
            </DropDownContent>

            <DropDownContent>
              <img src={user} alt="icon" />
              <p>Save post</p>
            </DropDownContent>

            <DropDownContent>
              <img src={volume} alt="icon" />
              <p>Mute @duduzili</p>
            </DropDownContent>

            <DropDownContent>
              <img src={blocked} alt="icon" />
              <p>Block @duduzili</p>
            </DropDownContent>

            <DropDownContent>
              <img src={flag} alt="icon" />
              <p>Report post</p>
            </DropDownContent>

            <Button onClick={openModal}>Cancel</Button>
          </DropDown1>
        </DropDownBox>
      )}
    </>
  );
};

export default Index;
