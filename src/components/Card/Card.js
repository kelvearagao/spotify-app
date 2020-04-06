import React from "react"
import { Card, CardTitle, CardSubtitle } from "./Card.style"

export default ({ imgSrc, title, subtitle, onClick, isActive }) => (
  <Card onClick={onClick} isActive={isActive}>
    <img src={imgSrc} alt={title} />
    <CardTitle>{title}</CardTitle>
    <CardSubtitle>{subtitle}</CardSubtitle>
  </Card>
)