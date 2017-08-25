import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

class Selection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      viewMore: false
    };
    this.viewMoreHandler = this.viewMoreHandler.bind(this);
  }

  viewMoreHandler() {
    this.setState((prevState) => {
      return { viewMore: !prevState.viewMore };
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
          actions={actions}
          autoDetectWindowHeight={false}
          contentStyle={{
            width: "92%",
            height:"90%",
            maxWidth: "none",
            transform: "none"
          }}
          bodyStyle={{
            height: "90%",
            maxHeight: 'none',
          }}
          modal={false}
          open={this.state.viewMore}
          onRequestClose={this.viewMoreHandler}
        >
          <iframe
            src={this.props.selection.fullData.source.sourceRecipeUrl}
            style={{
              width: '96%',
              height: '90%'
            }}
          />
        </Dialog>
      )
    }

    return this.props.selection ?
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
      }}>
        <div style={{
          boxSizing: 'border-box',
          height: '150px'
        }}>
          <div
            cols="1"
            rows="1"
            style={{
              position: 'relative',
              display: 'block'
          }}>
            <img
              style={{
                position: 'relative',
                display: 'block',
                height: '93%'
              }}
              src={this.props.selection.fullData.images[0].hostedLargeUrl}
            />
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          justifyContent: 'space-between',
          height: '140px'
        }}>
          <span style={{
            textAlign: 'center',
            padding: '6px 6px 6px 6px',
            backgroundColor: '#E0F2F1',
            fontWeight: 'bold',
            fontSize: '115%'
          }}>
            {this.props.selection.fullData.name}
          </span>
          <p style={{
            padding: '0px 5px 0px 10px',
            height: '50px',
            overflowY: 'scroll'
          }}>{this.props.selection.abridgedData.ingredients.join(', ')}</p>
          <RaisedButton
            label="Read More"
            onTouchTap={this.viewMoreHandler}
            style={{
              backgroundColor: '#E0F2F1'
            }}/>
        </div>
        { dialogBox }
      </div> :
      <div style={{
        display: 'flex',
        height: '150px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
        color: '#757575',
        fontSize: '22px',
        fontFamily: 'Sans-Serif',
        }}>
        <p> Click on a recipe image to get started! </p>
      </div>
  }
}

export default Selection;
