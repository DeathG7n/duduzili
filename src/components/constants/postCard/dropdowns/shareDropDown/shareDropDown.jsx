import React, { useEffect, useState } from "react";

import { DropDownBox, ShareDropDown, Button } from "./shareStyles";
import mail from "../../../../assets/mail.svg";
import shareicon from "../../../../assets/share.svg";
import link from "../../../../assets/link.svg";

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
          <ShareDropDown className="dropdown">
            <div>
              <img src={link} alt="icon" />
              <p>Copy link</p>
            </div>

            <div>
              <img src={mail} alt="icon" />
              <p>Send via message</p>
            </div>

            <div>
              <img src={shareicon} alt="icon" />
              <p>Share with apps</p>
            </div>

            <Button onClick={openModal}>Cancel</Button>
          </ShareDropDown>
        </DropDownBox>
      )}
    </>
  );
};

export default Index;
