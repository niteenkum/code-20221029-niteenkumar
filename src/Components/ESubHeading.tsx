import "./components.css";
/* Defining the props that the component will receive. */
interface IProps {
  title: string;
}
export default function ESubHeading({ title }: IProps) {
  return (
    /* A React component that is being rendered for rendering the title. */
    <p className='e-sub-heading'>{title}</p>
  )
}
