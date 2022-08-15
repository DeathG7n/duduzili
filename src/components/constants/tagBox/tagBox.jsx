import React from "react";
import {Link} from "react-router-dom"

import { Card, ContentBox, Links } from "./tagStyles";

const Index = () => {
  return (
    <Card>
      <ContentBox>
        <Link to="/help" style={{textDecoration: "none", color: "black"}}><Links>Help</Links></Link>
        <Link to="/about" style={{textDecoration: "none", color: "black"}}><Links>About</Links></Link>
        <Links>Careers</Links>
        <Links>Blog</Links>
        <Links>Press</Links>
        <Links>Advertising</Links>
        <Link to="/policy" style={{textDecoration: "none", color: "black"}}><Links>Privacy Policy</Links></Link>
        <Links>Terms</Links>
      </ContentBox>
    </Card>
  );
};

export default Index;
