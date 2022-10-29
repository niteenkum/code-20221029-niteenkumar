import "./components.css";
import EPriceLabel from "./EPriceLabel";
import ESubHeading from "./ESubHeading";
/* Defining the props that the component will receive. */

interface IProps {
  title: string;
  labels: {
    label: string;
    book: boolean;
  }[];

  image: string;
}

export default function ERoomsCards({ title, labels, image }: IProps) {
  /* Creating a variable called divImage and assigning it a value of an object. */
  var divImage = {
    backgroundImage: "url(" + image + ")",
    borderRadius: "16px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="e-card" style={divImage}>
      <div className="e-card-details">
        <ESubHeading title={title} />

        <div style={{ display: "flex", gap: "10px" }}>
          {/* Mapping through the labels array and returning the EPriceLabel component. */}
          {labels.map((val, index) => (
            <EPriceLabel key={index} title={val?.label} book={val?.book} />
          ))}
        </div>
      </div>
    </div>
  );
}
