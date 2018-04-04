//this imports is needed whenever a component use jsx:
import React from 'react'

// way to go to write a component class
class SearchBar extends React.Component {

    render () {
        return <input/>
    }

}
/*const SearchBar = () => {
    return <input/>
}*/

//to be exportable
export default SearchBar;