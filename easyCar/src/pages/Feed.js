import React, { Component } from 'react'

import "rbx/index.css";
import '../styles/Feed.scss'
import PostCards from '../components/PostCards'

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
            <section className="page-content">
          
                <div className="feed">
                    <PostCards></PostCards>
                </div>
            </section >
        )
    }
}

export default Feed