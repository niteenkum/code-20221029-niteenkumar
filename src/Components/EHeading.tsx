import "./components.css";

interface IProps {
  heading: string
}

export default function EHeading({heading}: IProps) {
  return (
    <p className="e-heading">{heading}</p>
  )
}
