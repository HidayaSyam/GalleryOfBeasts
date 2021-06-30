import React from 'react'

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfVotes: 0,
        }

    }
    increaseVote= () =>{
        this.setState({
            numberOfVotes:this.state.numberOfVotes + 1,
        })
    }
    render() {
        return(
            <div > 
                <img onClick={this.increaseVote} src={this.props.imageURL} alt={this.props.title} />
                <h2> {this.props.title}</h2>
                <p>{this.props.description}</p>
                <h3>Votes : {this.state.numberOfVotes}</h3>
            </div>
        )
    }
}

export default HornedBeasts;