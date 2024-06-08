import React from "react"
import s from './SuperSort.module.css'
import arrowDown from "../../../../assets/arrow-down.svg"
import arrowUp from "../../../../assets/arrow-up.svg"
import arrowUpDown from "../../../../assets/arrow-up-down.svg"

// добавить в проект иконки и импортировать
const downIcon = arrowDown
const upIcon = arrowUp
const noneIcon = arrowUpDown

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
            <img id={id + "-icon-" + sort} className={s.iconImg} src={icon} alt="sort arrow"/>
        </span>
      </div>

    )
}

export default SuperSort
