import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import { DropdownWrap, DropdownBtn, DropdownList, DropdownListItem } from './DropdownElement'
import Chevron from './Chevron'

const Dropdown = (props) => {
  const dropdownItemText = props.itemText;
  const url = props.url;

  const [isActive, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!isActive);
  }

  return(
    <DropdownWrap className={`dropdown ${isActive ? "active" : ''}`} onClick={toggleActive}>
      <DropdownBtn>{props.btnText}<Chevron className="arr"/></DropdownBtn>
      <DropdownList className='list'>
        {
          dropdownItemText && dropdownItemText.map((item, idx) =>(
            <DropdownListItem key={idx}>
              <Link to={url[idx]}>{item}</Link>
            </DropdownListItem>
          ))
        }

      </DropdownList>
    </DropdownWrap>
  )
}

export default Dropdown;