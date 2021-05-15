import React, { Component } from 'react'
import './superHeroResults.scoped.css'
import SuperHero from '../SuperHeroResultItem/SuperHeroResultItem'

export default class SuperHeroResults extends Component {
    render() {
        return (
            <div>
                {this.props.superHeroList ? this.props.superHeroList.map(superHero => 
                    <SuperHero data={superHero} key={superHero.id}/>
                ) : <h1>No matching name found</h1>}
            </div>
        )
    }
}

