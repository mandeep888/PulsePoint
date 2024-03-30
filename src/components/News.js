import React, { useEffect , useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props)=> {
  const [articles , setArticles] = useState([])
  const [loading , setLoading] = useState(true)
  const [page , setPage] = useState(1)
  const [totalResults , setTotalResult] = useState(0)

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(()=>{
    
      document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`
      updateNews();
  },[])

  const updateNews = async () => {
    props.changeProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.changeProgress(40)
    let parsedData = await data.json();
    props.changeProgress(60)
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResult(parsedData.totalResults)
    setLoading(false)
    props.changeProgress(100)
  }

  const handlePreviousClick = () => {

    setPage(page-1)
    
  }
  const handleNextClick = () => {
    setPage(page+1)
    updateNews();

  }

  // to bie used when using infinite scroll
  const fetchMoreData = async () => {   
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResult( parsedData.totalResults);
    setLoading(false);
    
  };
    return (
      <>
      <div className="container mt-3">
        <h1 className='text-center' style={{ margin: "35px 0" , marginTop:"80px" }}>News Monkey - Top Headlines From {capitalizeFirstLetter(props.category)}</h1>
        {loading && <Spinner/>} 
        <div className="row">
          {!loading && articles.map((element)=>{          
              return <div className="col-md-4" key={element.url}>
              <NewsItem  source={element.source} author ={element.author?element.author:"Anonymous"} date={element.publishedAt?element.publishedAt:"--"} title = {element.title?element.title.slice(0,40):"No Title"} description={element.description?element.description.slice(0,70):"No description"} imageUrl = {element.urlToImage}
              url = {element.url}/>
              </div>
            })}
          {/* <InfiniteScroll
            dataLength={.articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
          >
            <div className="container">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem source={element.source} author={element.author ? element.author : "Anonymous"} date={element.publishedAt ? element.publishedAt : "--"} title={element.title ? element.title.slice(0, 40) : "No Title"} description={element.description ? element.description.slice(0, 70) : "No description"} imageUrl={element.urlToImage}
                  url={element.url} />
              </div>
            })}
            </div>
          </InfiniteScroll> */}
        </div>
        <div className="container d-flex justify-content-between my-4">
          <button type="button" disabled={page <= 1} onClick={handlePreviousClick} className="btn btn-lg btn-primary">&larr; Previous</button>
          <button type="button" disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} onClick={handleNextClick} className="btn btn-lg btn-primary">Next &rarr;</button>
        </div>
        </div>
      </>
    )
  }


News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general"
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number
}

export default News
