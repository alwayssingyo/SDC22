import styled from 'styled-components'

export const LoadingContainer = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  z-index: 100;
`;

export const LoadingInner = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoadingItem = styled.div `
  width: 52px;
  height: 52px;
  border: 4px solid #2088fd;
  border-top: 4px solid transparent;
  border-radius: 50%;
  animation: spin 0.8s linear 0s infinite;
  
	@media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
  
  @keyframes spin {
  from {
    transform: rotate(0);
  }
  to{
    transform: rotate(359deg);
  }
}
`;