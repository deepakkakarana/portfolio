import  { Component } from 'react';
import Card from './Card';
import './Project.css';
import imageport from '../pictures/portpic.png'
import imageairtel from '../pictures/imageairtel.png'
import imagetravel from '../pictures/imagetravel.png'
import imagehonasa from '../pictures/imagehonasa.png'


export default class News extends Component {
    
  articles=[
    
    {
    tittle:"This is my portfolio project ",
    imageUrl:imageport,
    description:"This is portfolio using React Js technology",
    linkpro:"Read More",
  },

    {
    tittle:"This is my second project of Airtel Clone ",
    imageUrl:imageairtel,
    description:"This clone is based on Html,Css,Js",
    linkpro:"Read More",
  },

    {
    tittle:"This is my Travel Website ",
    imageUrl:imagetravel,
    description:"This is my third project based on React Js web-tecnology",
    linkpro:"Read More",
  },

    {
    tittle:"This is my fourth project ",
    imageUrl:imagehonasa,
    description:"This is Honasa ltd clone using Html,Css,Js and Email smtp.js",
    linkpro:"https://deepakmona.github.io/H_clone/",
  }
  
]

    constructor(){
        super();
        console.log("Hello ,this is constructor from news compoent ");

        this.state ={
        articles:this.articles,
		loading:false
        }
 
    } 

  // componenetDidMount jab run hoga jab render method run hoke complete ho jayega so..  this way to fetch data daily means data rom api live....

  render(){
    console.log('This is render method');
    return (
      <div className="container">
        <div className="row">
          <div className="col md-2">
          {this.state.articles.map((article,index)=>{
            return <Card key={index} tittle={article.tittle} description={article.description} imageUrl={article.imageUrl} url={article.linkpro}/>
          })}
          </div>
        </div>
      </div>
    )
  }
}