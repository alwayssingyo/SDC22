import React from "react";
import DetailContainer from '../../components/DetailContainer';
import ErrorCont from "../../components/ErrorCont";


const Error = () => {
  return (
    <DetailContainer>
      <ErrorCont 
        num="404"
        errorTitle="Page notFound"
        errorDesc="The page does not exist or is not available.<br> Please check again if the address you entered is correct."
      />
    </DetailContainer>
  )
}

export default Error;