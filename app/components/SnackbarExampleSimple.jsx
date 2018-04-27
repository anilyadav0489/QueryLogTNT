import React from 'react';
import Snackbar from 'material-ui/Snackbar';

export default class SnackbarExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      autoHideDuration: 3500,
      message: props.message,
      open: props.open,
    };
  }

  handleChangeDuration = (event) => {
    const value = event.target.value;
    this.setState({
      autoHideDuration: value.length > 0 ? parseInt(value) : 0,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <Snackbar
          open={this.props.open}
          message={this.props.message}
          autoHideDuration={this.state.autoHideDuration}
          />
      </div>
    );
  }
}
