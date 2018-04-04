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
        <div>
          <input 
          value = {this.state.term}
          onChange= {event=>this.setState({term:event.target.value})}/>
          Value of the input u tape: {this.state.term}
        </div>
        )
    }

    onInputChange (event) {
        console.log (event.target.value)

    }

}
/*const SearchBar = () => {
    return <input/>
}*/

//to be exportable
export default SearchBar;