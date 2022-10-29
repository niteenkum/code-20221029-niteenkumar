import "./components.css";

/* Defining the type of the props that the component will receive. */
interface IProps {
  heading: string
}

export default function EHeading({heading}: IProps) {
  return (
    /* A React component that is being exported to display heading. */
    <p className="e-heading">{heading}</p>
  )
}
