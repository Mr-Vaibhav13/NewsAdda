import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class Newsmain extends Component {


  constructor(){
    super();
    // console.log("Hello");
    this.state={
      articles: [],
      loading:false,
      page:1,
      pageSize:10
    }
  }

  capitalLetter = (string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

// this is form to concise the code size and decrease code reusability
  async updateNews(){
    // this.props.setProgress(10);
    let ApiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading:true});
    let data = await fetch(ApiUrl);

    // this.props.setProgress(30);

    let parsedData = await data.json();

    // this.props.setProgress(70);
    // console.log(parsedData);
    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
    })
    // this.props.setProgress(100);
    document.title = `${this.capitalLetter(this.props.category)} - NewsAdda`;

  }  






  async componentDidMount(){
    // const ApiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e67ffb0ec7d34e82889895c214b41f53&page=1&pageSize=${this.props.pageSize}`
    // let data = await fetch(ApiUrl);
    // let parsedData = await data.json();
    // // console.log(parsedData);
    // this.setState({
    //   articles:parsedData.articles,
    //   totalResults:parsedData.totalResults,
    //   loading:false
    // });
    
    this.updateNews();
  }



// -----------------------------------------------------------------------------------------
  prevBtn = async()=>{
    console.log("prev");

    // let ApiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e67ffb0ec7d34e82889895c214b41f53&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(ApiUrl);
    // let parsedData = await data.json();
    // // console.log(parsedData);
    // this.setState({
    //   articles:parsedData.articles,
    //   page : this.state.page-1,
    //   loading:false
    // })
   

    
    this.setState({page:this.state.page-1});
    this.updateNews();
  }



// ---------------------------------------------------------------------------------------------------
  nextBtn = async()=>{
    if(!Math.ceil(this.state.totalResults/this.props.pageSize) < this.state.page+1){
    
    // let ApiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e67ffb0ec7d34e82889895c214b41f53&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(ApiUrl);
    // let parsedData = await data.json();
    // // console.log(parsedData);
    // this.setState({
    //   articles:parsedData.articles,
    //   page : this.state.page+1,
    //   loading:false
    // })

    this.setState({page:this.state.page+1});
    this.updateNews();
  
  }
  }

  fetchMoreData = async()=>{
    this.setState({page: this.state.page + 1});
    let ApiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading:true});
    let data = await fetch(ApiUrl);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles:this.state.articles.concat(parsedData.articles),
      totalResults:parsedData.totalResults,
      loading:false
    });

  }


  render() {
    return (

        <div className='container my-5 text-center' >

            <h2 style={{marginBottom:"2em", textDecoration:"Underline" }}>Top {this.capitalLetter(this.props.category)} headlines</h2>
            
            {/* {this.state.loading && <Spinner/>} */}
           
            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
           >
       

        <div className='row'>
            {this.state.articles.map((element)=>{
             return <div className='col-md-4'>
        
            <NewsItem title={element.title?element.title.slice(0,52):""} desc={element.description?element.description.slice(0,77):""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>

            </div>
        
            })}
        </div>
        
        </InfiniteScroll>

        
      {/* <div className='container d-flex justify-content-between mt-5'>
      <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.prevBtn}>&larr; PREV</button>
      <button type="button" disabled={this.state.totalResults/this.props.pageSize < this.state.page+1} className="btn btn-dark" onClick={this.nextBtn}>NEXT &rarr;</button>
      </div> */}
        
      </div>
    )
  }
}


Newsmain.defaultProps = {
  pageSize: 10,
  country:"in",
  category:"general"
};


Newsmain.propTypes = {
  pageSize: PropTypes.number,
  country:PropTypes.string,
  category:PropTypes.string
};