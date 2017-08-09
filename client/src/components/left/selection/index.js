import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Flexbox from 'flexbox-react';

var Selection = () => (

  <Flexbox maxWidth="30vw" margin="auto">
    <Card>
      <CardHeader
        title="Selected Item:"
        showExpandableButton={true}
      />
      <CardMedia
        overlay={<CardTitle title="Food Item" subtitle="Looks delicious!" />}
        expandable={true}
      >
        <img src="https://agroplus.rs/agroplus/wp-content/uploads/2013/04/3-180-1.jpg" />
      </CardMedia>
      <CardTitle title="Next Meal Up"/>
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      </CardText>
    </Card>
  </Flexbox>

)

export default Selection;