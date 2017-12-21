import React from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    background: '#333433',
    color: 'white',
    '&:focus': {
      outline: '0'
    }
  }
};

function TabContainer(props) {
  return (
    <div style={{ padding: 8 * 3 }}>
      {props.children}
    </div>
  );
}

class IconTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
      <Paper classes={{
        root: this.props.classes.root, // className, e.g. `OverridesClasses-root-X`
      }} className={this.props.classes.custom} elevation={0} square={true}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth
          indicatorColor="transparent"
        >
          <Tab 
            classes={{
              root: this.props.classes.root, // className, e.g. `OverridesClasses-root-X`
            }} 
            icon={<PhoneIcon />} 
          />
          <Tab classes={{
        root: this.props.classes.root, // className, e.g. `OverridesClasses-root-X`
      }} icon={<FavoriteIcon />} />
          <Tab classes={{
        root: this.props.classes.root, // className, e.g. `OverridesClasses-root-X`
      }} icon={<PersonPinIcon />} />
        </Tabs>
        
      </Paper>
        {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
      </div>
    );
  }
}

export default withStyles(styles)(IconTabs);


