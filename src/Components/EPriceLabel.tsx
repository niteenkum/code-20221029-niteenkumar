import "./components.css";

/* Defining the props that the component will receive. */
interface IProps {
    title: string;
    book: boolean;
}

export default function EPriceLabel({ title, book }: IProps) {
  return (
   /* A ternary operator. It is a shorthand way of writing an if/else statement it just deciding that if book is true than the class will applied will be different to just fix the height and other minor changes. */
    <div className={!book ? "e-price-label" : "e-book-label"}>{title}</div>
  )
}
