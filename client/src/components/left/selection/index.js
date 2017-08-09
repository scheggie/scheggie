import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Flexbox from 'flexbox-react';

const general_style = {
  fontFamily: 'sans-serif',
  font: 'roboto',
  backgroundColor: '#ffffff'
};

const image_style = {
  alignItems: 'center',
};

const title_style = {
  textAlign: 'center',
  padding: '0px 0 0px 0',
  backgroundColor: '#e6e6e6'
};

const desc_style = {
  textAlign: 'left',
  padding: '0px 10px 10px 10px'
};

var Selection = () => (

  <Flexbox flexDirection="row" maxWidth="33vw" style={general_style}>
    <Flexbox flexGrow="1" style={image_style}>
      <img style={{maxWidth: '100%'}} src="http://tuvanranghammat.vn/assets/lo-mieng-nen-an-gi-e1469805715695.jpg"/>
    </Flexbox>
    <Flexbox flexDirection="column" flexGrow="2" style={{}}>
      <h3 style={title_style}>Food Title</h3>
      <p style={desc_style}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </Flexbox>
  </Flexbox>

)

export default Selection;