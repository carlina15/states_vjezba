import { Component } from "react";

export default class UserClass extends Component {
    render(){
        const {name, age} = this.props
        return (
            <p>Pozdrav, moje ime je {name} i imam {age} godina.</p>
        )
    }
}