//this imports is needed whenever a component use jsx:
import React, {Component} from 'react'

// way to go to write a component class (class based component)
class SearchBar extends Component {

    render () {
        return <input onChange= {this.onInputChange}/>
    }

    onInputChange () {

    }

}
/*const SearchBar = () => {
    return <input/>
}*/

//to be exportable
export default SearchBar;