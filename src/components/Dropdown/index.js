import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'
import Chevron from './Chevron'

const Dropdown = (props) => {
  const dropdownItemText = props.itemText;
  const url = props.url;

  const [isActive, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!isActive);
  }

  return(
    <S.DropdownWrap className={`dropdown ${isActive ? "active" : ''}`} onClick={toggleActive}>
      <S.DropdownBtn>{props.btnText}<Chevron className="arr"/></S.DropdownBtn>
      <S.DropdownList className='list'>
        {
          dropdownItemText && dropdownItemText.map((item, idx) =>(
            <S.DropdownListItem key={idx}>
              <Link to={url[idx]}>{item}</Link>
            </S.DropdownListItem>
          ))
        }

      </S.DropdownList>
    </S.DropdownWrap>
  )
}

export default Dropdown;