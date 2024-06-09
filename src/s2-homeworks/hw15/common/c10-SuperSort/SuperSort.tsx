import React from "react"
import s from './SuperSort.module.css'

// добавить в проект иконки и импортировать
const downIcon = 
  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="Polygon 5" d="M4 5L0.535898 0.5L7.4641 0.5L4 5Z" fill="currentColor"/>
  </svg>
const upIcon = 
  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="Polygon 2" d="M4 0L7.4641 4.5H0.535898L4 0Z" fill="currentColor"/>
  </svg>
const noneIcon = 
  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 0L7.4641 4.5H0.535898L4 0Z" fill="currentColor"/>
    <path d="M4 12L0.535898 7.5L7.4641 7.5L4 12Z" fill="currentColor"/>
  </svg>

export type SuperSortPropsType = {
    id?: string
    name: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => "" (click) => down ...
    if (sort === down) {
      return up;
    } else if (sort === up) {
        return "";
    } else {
        return down;
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = "hw15", name
    }
) => {
    const up = "0" + value
    const down = "1" + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    let icon;
    if (sort === down) {
      icon = downIcon;
    } else if (sort === up) {
      icon = upIcon;
    } else {
      icon = noneIcon;
    }

    return (
      <div className={s.title} onClick={onChangeCallback}>
        {name}
        <span
            id={id + "-sort-" + value}
            className={s.icon}
        >
            {/*сделать иконку*/}
            {icon}
        </span>
      </div>

    )
}

export default SuperSort
