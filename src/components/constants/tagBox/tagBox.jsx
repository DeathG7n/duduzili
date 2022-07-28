import React from "react";
import {Link} from "react-router-dom"

import { Card, ContentBox, Links } from "./tagStyles";

const Index = () => {
  return (
    <Card>
      <ContentBox>
        <Link to="/user/help"><Links>Help</Links></Link>
        <Link to="/user/about"><Links>About</Links></Link>
        <Links>Careers</Links>
        <Links>Blog</Links>
        <Links>Press</Links>
        <Links>Advertising</Links>
        <Links>Policy</Links>
        <Links>Privacy</Links>
        <Links>Terms</Links>
      </ContentBox>
    </Card>
  );
};

export default Index;
