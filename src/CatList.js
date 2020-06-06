import React from 'react'

class CatList extends React.Component {
  render() {
    return(
      <div>
        {this.props.catPics.map(pic => <img key={pic.id} src={pic.url} alt="catpic" />)}
      </div>
    )
  }
}

export default CatList