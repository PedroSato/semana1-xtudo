import React, { Component, Fragment } from 'react'

import "rbx/index.css";
import '../styles/Feed.scss'
import PostCards from '../components/PostCards'
import CardImage from '../components/CardImage'


class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    title: 'Geral',
                    subtitle: 'Porque comprar um carro semi-novo?',
                    imageUrl: ''
                },
                {
                    title: 'Categoria',
                    subtitle: 'Titulo do Card 2',
                    imageUrl: ''
                },
                {
                    title: 'Geral',
                    subtitle: 'card 3 texto',
                    imageUrl: ''
                }
            ]
        };
    }
    render() {
        return (
            <Fragment>
                
                <section className="page-content">
                    <div className="feed">
                        <PostCards/>
                    </div>
                </section >
            </Fragment>
        )
    }
}

export default Feed