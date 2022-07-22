import styled from "styled-components";

export const DropDownBox = styled.div`
  width: 95%;
  height: calc(100vh - 70px);
  background-color: rgba( 0 0 0 /0.6);
  position: fixed;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  z-index: 14;
`;

// export const DropDown1 = styled.div`
//   width: 100%;
//   background-color: white;
//   border-top-right-radius: 12px;
//   border-top-left-radius: 12px;
//   padding: 15px 10px;
//   box-sizing: border-box;
// `;

// export const DropDownContent = styled.div`
//   display: flex;
//   align-items: center;
//   padding-left: 10px;
//   margin-top: 20px;

//   > p {
//     color: #49665C;
//     font-weight: 600;
//     margin-left: 20px;
//     font-size: 15px;
//     cursor: pointer;
//   }
// `;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  background-color: #F1F5F4;
  color: black;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  margin-top: 30px;
`;
export const DropDown1 = styled.div`
  width: 230px;
  height: ${(props) => props.height};
  background-color: white;
  position: absolute;
  display: none;
  top: 10px;
  right: 0%;
  box-shadow: 0px 16px 64px rgba(16, 34, 28, 0.32);
  border-radius: 8px;
  padding-bottom: 10px;
  z-index: 2;


  @media screen and (max-width: 700px) {
    width: 250px;
  }
`;

export const DropDownContent = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-top: 20px;

  > p {
    color: #10221c;
    margin-left: 10px;
    font-size: 15px;
    cursor: pointer;
  }
`;