import "./components.css";

/* Defining the props that the component will receive. */
interface IProps {
  label: string;
  placeholder: string;
  options: any[];
}

export default function EInput( { label, placeholder,options}: IProps ) {
  return (
    <div className='e-input'>
        <p className="label">{label}</p>
        <select className="select" placeholder={placeholder}>
       {/* A map function that is being called to render all the options. */}
          {
            options.map((item, index) => {
              return <option key={index} value={item}>{item}</option>
            })
          }
        </select>
    </div>
  )
}
