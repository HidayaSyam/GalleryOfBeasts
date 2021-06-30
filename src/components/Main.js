import React from 'react'
import HornedBeasts from './HornedBeasts'
import Data from '../data/data.json'
class Main extends React.Component {
    render() {
        
        return (
            <main>
                <h1>
                    Hello, we are in the main
                </h1>
            {
                Data.map(element => {
                 return (<HornedBeasts key={element.title} imageURL={element.image_url} title={element.title} description={element.description} />)
                })
            }

            </main>
        )
    }
}
export default Main;