import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';


class Selection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      viewMore: false
    }
    this.viewMoreHandler = this.viewMoreHandler.bind(this);
  }

  viewMoreHandler() {
    this.setState({
      viewMore: !this.state.viewMore
    });
  }

  render() {

    const actions = [
      <FlatButton
        label="Close"
        secondary={true}
        onTouchTap={this.viewMoreHandler}
      />
    ];

    let dialogBox = null;

    if (this.state.viewMore) {
      dialogBox = (
        <Dialog
          title="INSERT_TITLE_HERE"
          actions={actions}
          modal={false}
          open={this.viewMoreHandler}
          onRequestClose={this.viewMoreHandler}
        >
          <div style={{textAlign: 'center'}}>
            <img style={{maxWidth: '100%'}} src="http://tuvanranghammat.vn/assets/lo-mieng-nen-an-gi-e1469805715695.jpg"/>
          </div>
          <div>
            <h3>INSERT_FOOD_ITEM_NAME_HERE</h3>
            <p>INSERT_DESCRIPTION</p>
            <ul>
              <li>INGREDIENTS</li>
              <li>INGREDIENTS</li>
              <li>INGREDIENTS</li>
              <li>INGREDIENTS</li>
              <li>INGREDIENTS</li>
            </ul>
          </div>
        </Dialog>
      )
    } else {
      dialogBox = null;
    }

    return (

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
      }}>

        <div>
          <img style={{maxWidth: '100%'}} src="http://tuvanranghammat.vn/assets/lo-mieng-nen-an-gi-e1469805715695.jpg"/>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          justifyContent: 'space-between',
        }}>
          <span style={{
            textAlign: 'center',
            padding: '10px 0 10px 0',
            backgroundColor: '#E0F2F1',
          }}>
            Food Title
          </span>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <FlatButton label="Read More" onTouchTap={this.viewMoreHandler}/>
        </div>

      </div>
      
    )
  }
}

// <Flexbox flexDirection="row" maxWidth="33vw" style={general_style}>
//         <Flexbox flexGrow="1" style={image_style}>
          // <img style={{maxWidth: '100%'}} src="http://tuvanranghammat.vn/assets/lo-mieng-nen-an-gi-e1469805715695.jpg"/>
//         </Flexbox>
//         <Flexbox flexDirection="column" flexGrow="2">
//           <h3 style={title_style}>Food Title</h3>
//           <p style={desc_style}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//           <FlatButton label="Read More" onTouchTap={this.viewMoreHandler}/>
//         </Flexbox>
//         { dialogBox }
//       </Flexbox>

export default Selection;