/* eslint-disable react/prop-types */
import { Component } from 'react';
import './Card.css';

export default class NewsItem extends Component {
    render() {
        let {tittle,description,imageUrl,url}=this.props

        return (
      <div>

       <div className="card" style={{width:"18rem"}}>
        <img src={imageUrl} className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">{tittle}</h5>
           <p className="card-text">{description}</p>
           <a href={url} target="_blank" className="btn btn-sm btn-primary my-3" rel="noreferrer">Read More</a>

          </div>
    </div>
      </div>
    )
  }
}