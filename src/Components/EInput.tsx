import "./components.css";

export default function EInput() {
  return (
    <div className='e-input'>
        <p className="label">City</p>
        <select className="select" placeholder="Enter your city">
            <option value="1">Mumbai</option>
            <option value="2">Delhi</option>
            <option value="3">Bangalore</option>
            <option value="4">Chennai</option>
            <option value="5">Kolkata</option>
            <option value="6">Pune</option>
            <option value="7">Jaipur</option>
            <option value="8">Hyderabad</option>
            <option value="9">Ahmedabad</option>
            <option value="10">Chandigarh</option>

        </select>
    </div>
  )
}
