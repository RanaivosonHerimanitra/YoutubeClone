//this imports is needed whenever a component use jsx:
import React, {Component} from 'react'

// way to go to write a component class (class based component)
class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term:""}
    }

    render () {
        return (
        <div className="search-bar">
          <input 
          value = {this.state.term}
          onChange= {event=>this.onInputChange(event.target.value)}/>
          Value of the input u tape: {this.state.term}
        </div>
        )
    }

    onInputChange (term) {
       this.setState({term})
       this.props.onSearchTermChange(term)

    }

}
/*const SearchBar = () => {
    return <input/>
}*/

//to be exportable
export default SearchBar;