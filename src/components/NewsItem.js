


import React from 'react'

// export default class NewsItem extends Component 
const NewsItem=(props)=>{
  
  
  // render() {
      let {title,description,imgurl,newsUrl,author,publishedAt}=props;
    return (
      <div className='container my-3'>
          <div className="card" style={{width: "18rem"}}>
          <img src={!imgurl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-announcements/-476x249w4/gsmarena_00.jpg":imgurl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
      </div>
    </div></div>
    )
  
}
export default NewsItem
