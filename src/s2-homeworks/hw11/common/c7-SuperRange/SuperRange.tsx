import React from "react"
import { Slider, SliderProps } from "@mui/material"

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{ // стили для слайдера // пишет студент
        width: 300,
        borderRadius: "10px",
        color: "#8b8b8b",
        opacity: 1,
        ".MuiSlider-rail": {
          opacity: 1,
        },
        ".MuiSlider-track": {
          color: "#0C2",
        },
        ".MuiSlider-thumb": {
          width: "18px",
          height: "18px",
          color: "#0C2",
          border: "5px solid #fff",
          boxShadow: "0 0 0 1px #0C2",
          "&.Mui-focusVisible, &:hover": {
            boxShadow: "0 0 0 8px rgba(0, 204, 34, 0.26)"
          },
          "&.Mui-active": {
            boxShadow: "0 0 0 14px rgba(0, 204, 34, 0.26)"
          },
        },
        ".MuiSlider-thumb:before": {
          boxShadow: "none",
        }
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  )
}

export default SuperRange
