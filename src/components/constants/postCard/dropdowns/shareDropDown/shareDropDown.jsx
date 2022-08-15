import React, { useEffect, useState, useRef } from "react";

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
  const moreRef = useRef()
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          openModal(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(moreRef)

  return (
    <>
      {windowSize && (
        <DropDownBox>
          <ShareDropDown className="dropdown" ref={moreRef}>
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
