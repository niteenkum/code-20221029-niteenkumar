import "./components.css";
import EPriceLabel from "./EPriceLabel";
import ESubHeading from "./ESubHeading";

interface IProps {
  title: string;
  labels: 
    {
      label: string,
      book: boolean
    }[];
  
  image: string;
}

export default function ERoomsCards( { title, labels, image }: IProps) {
    var divImage = {
      backgroundImage : "url(" + image + ")",
      borderRadius: "16px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }
  return (
    <div className='e-card' style={divImage}>
        <div className="e-card-details">
          <ESubHeading
            title={title}
          />

          {/* <EPriceLabel
            title={subtitle}
            book={true}
          /> */}
         <div style={{display: "flex", gap: "10px"}}>
         {
            labels.map((val, index) => (
              <EPriceLabel
            title={val?.label}
            book={val?.book}
          />
            ))
          }
         </div>
        </div>
    </div>
  )
}
