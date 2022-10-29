import {BsSearch} from 'react-icons/bs';

export default function EButton() {
  return (
    /* A React component that returns a div with a search icon and the word "Search" inside of it. */
    <div className='e-button'>
        <BsSearch className="icon"/>
        <span>Search</span>
        </div>
  )
}
