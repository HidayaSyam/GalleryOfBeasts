import React from 'react'

class HornedBeasts extends React.Component {
    render() {
        return(
            <div>
                <img src={this.props.imageURL} />
                <h2> {this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeasts;