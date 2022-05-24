import React, { useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import Link from 'react-router-dom'
import InfiniteScroll from "react-infinite-scroll-component";
// export default class News extends Component 
const News=(props)=>{
  // https://newsapi.org/v2/top-headlines?country=us&apiKey=56f9f3181292403bb50e5b626b6aaa51
//     static defaultProps={
// country:"us",
// pageSize:8,
// category:"general"
//     }
// static propTypes={
//   country:PropTypes.string,
//   pageSize:PropTypes.number,
//   category:PropTypes.string

// }
const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(true)
const [page, setPage] = useState(1)
const [totalResults, setTotalResults] = useState(0)
// document.title=`${props.category}-NewsMonkey`
// constructor(props){
//   super(props);
//   console.log("constructor");
//   this.state={
    
      
//       articles:[],
//       loading:true,
//      page:1,
//      totalResults:0
      
//   }
//   document.title=`${props.category}-NewsMonkey`
// }

 const updateNews=async()=>{
 props.setProgress(0);
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}&pageSize=${props.pageSize}`;
 
  let data= await fetch(url);
  let parsedData= await data.json();
  console.log(parsedData);
  setArticles(parsedData.articles)
  setTotalResults(parsedData.totalResults)
  setLoading(false)
//   this.setState({
// articles:parsedData.articles,
// totalResults:parsedData.totalResults,
// loading:false
//   })
props.setProgress(100)
} 
 
// https://newsapi.org/v2/top-headlines?country={props.country}&category=${props.category}&apiKey=56f9f3181292403bb50e5b626b6aaa51=${props.pageSize}
//  async componentDidMount(){
// //   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
// //   // f80fc05209554275ae79cc12446ef7c1
// //   let data= await fetch(url);
// //   let parsedData= await data.json();
// //   console.log(parsedData);
// //   this.setState({
// // articles:parsedData.articles,
// // totalResults:parsedData.totalResults,

// //   })

// }
useEffect(() => {
updateNews()

  
}, [])

const handleNextClick=async()=>{
  console.log("Next");
//   if (!this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)) {
  
//   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=56f9f3181292403bb50e5b626b6aaa51&page=${this.state.page-1}&pageSize=${props.pageSize}`;
//   this.setState({
//     loading:true
//   })
//   let data= await fetch(url);
//   let parsedData= await data.json();
//   console.log(parsedData);
  
// this.setState({
  
//   page:this.state.page+1,
//   articles:parsedData.articles,
//   loading:false
// })
  // }
  // this.setState({
  //   page:this.state.page+1 
  // })
  setPage(page+1)
  updateNews()
  
} 

const handlePrevClick=async()=>{
//   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=56f9f3181292403bb50e5b626b6aaa51&page=${this.state.page-1}&pageSize=${props.pageSize }`;
//   this.setState({
//     loading:true
//   })
//   let data= await fetch(url);
//   let parsedData= await data.json();
//   console.log(parsedData);

// this.setState({
  
//   page:this.state.page-1,
//   articles:parsedData.articles,
//   loading:false
// })
// this.setState({
//   page:this.state.page-1
// })
setPage(page-1)
updateNews()

}
 const fetchMoreData = async() => {
  // a fake async api call like which sends
  // 20 more records in 1.5 secs
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page+1)
  let data= await fetch(url);
  let parsedData= await data.json();
  console.log(parsedData);
  setArticles(articles.concat(parsedData.articles))
//     this.setState({
//       articles:articles.concat(parsedData.articles),
// totalResults:parsedData.totalResults,

//     });
setTotalResults(parsedData.totalResults)
  updateNews()
};


  
    return (
    
      <>
        <h2 className='text-center'>NewsMonkey-Top HeadLines on {props.category}</h2>
        {loading&&<Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!=totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>
<div className='row'>

{articles.map((element)=>{
return(
  <div className='col-md-4' key={element.url}>
  <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgurl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt}/ >
  
  </div>

)

})}

</div>
        
      </div>
      </InfiniteScroll>
      <div className='container'>
      <div className="row justify-content-between">
    {/* <div className="col-4">
      <button disabled={this.state.page<=1}   type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
</div> */}



</div>
{/* <div className="col-4">
      <button  disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
</div> */}
        </div>
      </>
      
    )
  
}
News.defaultProps={
  country:"us",
  pageSize:8,
  category:"general"
      }
 News.propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  
  }
export default News
