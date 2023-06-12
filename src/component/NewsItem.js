import React, { Component } from 'react'
import imageChg from "./imageChg.gif"

export default class NewsItem extends Component {

  

  render() {
    
    let {title,desc,imgUrl,newsUrl,author,date,source} = this.props;
    return (
      <div>
            {/* style={{height:"35em"}} */}
      <div className="card my-2">

      <div style={{
        display:'flex',
        justifyContent:'flex-end',
        position:'absolute',
        right:'0'
      }}>

      <span className="badge rounded-pill bg-danger">{source}</span>
      
</div>
<div className='w-100 p-3'>
      <img src={!imgUrl?imageChg:imgUrl} className="card-img-top" alt="..."/>
      <div className="card-footer text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</div>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{desc}...</p>
        <a href={newsUrl}  rel="noreferrer" target="_blank" className="btn btn-info">Read More</a>
      </div>
      </div>
</div>
      </div>
    )
  }
}
