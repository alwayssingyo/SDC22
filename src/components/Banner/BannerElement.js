import styled from "styled-components";

export const BannerBox = styled.div`
  width: 50%;
  margin: 0 24px 0 0;
  padding: 40px;
  background-color: #fff;
  border-radius: 20px;
  box-sizing: border-box;
  &:first-of-type{
    margin-left: 0;
  }
  &.fullWidth {
    width: 100%;
    margin: 0;

    &:first-of-type {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }

    &+& {
      padding-top: 0;
      border-radius: 0;

      .fullWidthInner {
        padding-top: 40px;
        border-top: 1px solid #efefef;

        .right {
          margin-top: 20px;
        }
      }
    }

    &:last-of-type {
      padding-top: 0;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 20px !important;
      border-bottom-right-radius: 20px !important;

      .fullWidthInner {
        padding-top: 40px;
        border-top: 1px solid #efefef;

        .right {
          margin-top: 20px;
        }
      }
    }

    /* if one element */
    &.border {
      border-radius: 20px;
      &:last-of-type {
        .fullWidthInner {
          border-top: 0;
        }
      }
    }

    .fullWidthInner {
      min-height: 0;
    }
  }

  &+& {
    margin-left: 0;
  }
  @media screen and  (max-width: 768px) {
    width: initial;
    margin: 0 0 16px 0;
    padding: 24px;
    border-radius: 14px;
    &.fullWidth {
      &:last-of-type {
        border-bottom-left-radius: 14px !important;
        border-bottom-right-radius: 14px !important;
        .fullWidthInner {
          padding-top: 24px;
        }
      }
    }
  }
`

export const BannerBoxInner = styled.div`
  position: relative;
  min-height: 173px;
  @media screen and  (max-width: 768px) {
    min-height: auto;
  }
`

export const BannerBoxInfo = styled.div`


  @media screen and  (max-width: 768px) {

  }
`

export const BannerTitle = styled.div`
  margin-bottom: 4px;
  font-family: 'SamsungOne-700';
  font-size: 20px;
  line-height: 1.3;

  @media screen and  (max-width: 768px) {
    margin-bottom: 6px;
    font-size: 16px;
  }
`

export const BannerDesc = styled.div`
  max-width: 80%;
  margin-bottom: 10px;
  line-height: 1.43;
  color: #535353;
  @media screen and  (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 12px;
  }
`

export const BannerLink = styled.a`
  display: inline-block;
  color: #1259aa;
  font-family: 'SamsungOne-700';
  line-height: 1.57;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

  &:hover:not(.dim) {
    color: #2088fd;
    text-decoration: underline;

    svg{
      path {
        stroke: #2088fd;
      }
    }
  }

  &.dim {
    color: #9e9e9e;
    svg{
      path {
        stroke: #9e9e9e;
      }
    }

  }

  svg {
    display: inline-block;
    margin-left: 4px;
    margin-top: -2px;
    vertical-align: middle;
  }

  &+&{
    margin-left: 24px;
  }
  @media screen and  (max-width: 768px) {

    &+&{
      margin-top: 12px;
      margin-left: 0;
    }
  }
`

export const BannerBtnLink = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 48.533%;
  margin-top: 24px;
  >a {
    width: 100%;
  }
  >button {
    width: 100%;
  }

  &+& {
    left: auto;
    right: 0;
  }

  &.fullWidth {
    width: 100%;
    >a {
      width: 100%;
    }
  }

  @media screen and  (max-width: 768px) {
    position: relative;
    left: auto;
    bottom: auto;
    width: 100%;
    margin-top: 10px;

    .aLink {
      width: 100%;
    }


  }
`