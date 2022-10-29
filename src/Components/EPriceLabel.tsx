import "./components.css";

interface IProps {
    title: string;
    book: boolean;
}

export default function EPriceLabel({ title, book }: IProps) {
  return (
    <div className={!book ? "e-price-label" : "e-book-label"}>{title}</div>
  )
}
