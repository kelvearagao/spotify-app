import React from "react"
import { Card, CardTitle, CardSubtitle } from "./Card.style"

export default ({ id, imgSrc, title, subtitle, onClick, isActive }) => (
  <Card id={id} onClick={onClick} isActive={isActive} imgBg={imgSrc}>
    <div className="img-container">
      <div className="bg"/> 
    </div>
    {/* <img src={imgSrc} alt={title} /> */}
    <CardTitle>{title}</CardTitle>
    <CardSubtitle>{subtitle}</CardSubtitle>
  </Card>
)
