import styled from "styled-components";

export const PopupSurveyContainer = styled.div `
  position: fixed;
  right: 32px;
  bottom: 24px;
  width: 240px;
  z-index: 98;

	@media (max-width: 768px) {
    width: calc(100% - 48px);
    right: auto;
    left: 50%;
    transform: translateX(-50%);
	}
`;

export const PopupSurveyInner = styled.div `
  padding: 34px 20px 20px;
  background-color: #fff;
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.08);
  p {
    font-family: 'SamsungOne-600';
    line-height: 1.43;
    color: #535353;
    &:last-of-type {
      margin-bottom: 10px;
    }
  }

  .aLink {
    height: 40px;
    font-size: 14px;
  }

  button {
    top: 14px;
    right: 14px;
    width: 20px;
    height: 20px;
  }

	@media (max-width: 768px) {
    padding: 34px 20px 20px;
    border-radius: 8px;
    p {
      font-family: 'SamsungOne-600';
      color: #535353;
    }
	}
`;