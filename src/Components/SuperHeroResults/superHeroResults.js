import React, { Component } from 'react'
import './superHeroResults.css'
import SuperHeroResultItem from '../SuperHeroResultItem/SuperHeroResultItem'

export default class SuperHeroResults extends Component {
    render() {
        return (
            <div>
                {/* if superHeroList is true than map through it and get individual item and pass to superHeroResultItem as props. */}
                {this.props.superHeroList ? this.props.superHeroList.map(superHero => 
                    <SuperHeroResultItem data={superHero} key={superHero.id} addToFavList={this.props.addToFavList} />
                ) : <h1>No matching name found</h1>}
            </div>
        )
    }
}

