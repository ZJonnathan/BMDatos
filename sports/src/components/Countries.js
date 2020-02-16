import React from 'react';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Divisions from './Divisions'
import { withStyles } from '@material-ui/core/styles';

const CountriesContainer = withStyles({
    root: {
        padding: 0,
        backgroundColor: '#000000'
    },
  })(Container);

const CountriesExpansionPanel = withStyles({
    root: {
      '&$expanded': {
        margin: 0,
      },
    },
    expanded: {},
  })(ExpansionPanel);

  const CountriesExpansionPanelSummary = withStyles({
    root: {
      backgroundColor: '#2196f3',
      color: '#ffffff'
    },
  })(ExpansionPanelSummary);
  
  const CountriesExpansionPanelDetails = withStyles(theme => ({
    root: {
      padding: 0,
    },
  }))(ExpansionPanelDetails);
  
class Countries extends React.Component {

    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this)
    }

    state={
        selectedIndex: -1
    }

    handleChange = (index) => this.setState({selectedIndex: this.state.selectedIndex === index ? -1 : index})

    render() {
        const { countries, handleSelectCountryDetails } = this.props
        const { selectedIndex } = this.state
        return (
            <CountriesContainer maxWidth={false}>
                {
                    Object.keys(countries).map(
                        (key, index) => 
                            <CountriesExpansionPanel
                                expanded={selectedIndex === index}
                                key={index}
                                onChange={()=>this.handleChange(index)}
                            >
                                <CountriesExpansionPanelSummary
                                    onClick={()=>handleSelectCountryDetails(countries[key])}
                                >
                                    <Typography>{ countries[key].nameCountry }</Typography>
                                </CountriesExpansionPanelSummary>
                                <CountriesExpansionPanelDetails>
                                    <Divisions divisions={countries[key].divisions}/>
                                </CountriesExpansionPanelDetails>
                            </CountriesExpansionPanel>
                    )
                }
            </CountriesContainer>
        );
    }
}

export default Countries