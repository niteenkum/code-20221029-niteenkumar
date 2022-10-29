import "./components.css";
interface IProps {
  title: string;
}
export default function ESubHeading({ title }: IProps) {
  return (
    <p className='e-sub-heading'>{title}</p>
  )
}
