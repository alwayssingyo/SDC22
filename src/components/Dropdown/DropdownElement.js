import styled from "styled-components";

export const DropdownWrap = styled.div `
  position: relative;

  &.active {
    .list {
      display: block;
      position: absolute;
      left: 0;
      top: auto;
      width: 100%;
    }

    .arr {
      transform: rotate(180deg);
    }
  }
  @media screen and (max-width: 768px){
    
  }
`;

export const DropdownBtn= styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 13px 16px;
  font-size: 16px;
  color: #000;
  border-radius: 8px;
  border: solid 1px #d6d6d6;
  text-align: left;


  @media screen and (min-width: 768px){
    &:hover{
      color: #2088fd;

      .arr {
        path {
          fill: #2088fd;
        }
      }
    } 
  }

  @media screen and (max-width: 768px){
    &:active{
      color: #2088fd;

      .arr {
        path {
          fill: #2088fd;
        }
      }
    } 
  }

`

export const DropdownList= styled.ul`
   position: relative;
   margin-top: 4px;
   padding: 8px 0;
   border: 1px solid #d6d6d6;
   border-radius: 8px;
   background-color: #fff;
   z-index: 1;
   display: none;
`

export const DropdownListItem = styled.li`
   position: relative;

   /* link */
   > a {
    display: block;
    padding: 8px 16px;
    font-size: 16px;
    color: #000;

    &:hover {
      color: #2088fd;
      background-color: rgba(15,66,207,.1);
    }
   }
`