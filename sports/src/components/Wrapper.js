import React from 'react';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Grid from '@material-ui/core/Grid'
import Countries from './Countries'
import CountryDetails from './CountryDetails'
import { withStyles } from '@material-ui/core/styles';
import sports from '../data'

const SportContainer = withStyles({
    root: {
        padding: 0
    },
  })(Container);

const SportExpansionPanel = withStyles({
    root: {
      '&$expanded': {
        margin: 0,
      },
    },
    expanded: {},
  })(ExpansionPanel);

const SportExpansionPanelSummary = withStyles({
    root: {
      backgroundColor: '#0d47a1',
      color: '#ffffff'
    },
})(ExpansionPanelSummary);
  
const SportExpansionPanelDetails = withStyles(theme => ({
    root: {
      padding: 0,
    },
}))(ExpansionPanelDetails);
  
const DummyContainer = withStyles({
    root: {
        padding: 20,
        width: '100%',
        backgroundColor: '#e3f2fd'
    },
})(Container);
  
class Wrapper extends React.Component {

    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this)
    }

    state={
        selectedIndex: -1,
        countryDetails: null,
    }

    handleChange = (index) => this.setState({selectedIndex: this.state.selectedIndex === index ? -1 : index})

    handleSelectCountryDetails = (countryDetails) => this.setState({countryDetails: countryDetails})

    handleOnClickExpand = () => this.setState({buttonExpand: true})

    render() {
        const { buttonExpand, countryDetails, selectedIndex } = this.state
        return (
            <SportContainer maxWidth={false}>
                <Grid container justify='space-between' spacing={2}>
                    <Grid item xs={12} md={4} lg={3} xl={2}>
                        {
                            Object.keys(sports).map(
                                (key, index) => 
                                    <SportExpansionPanel
                                        expanded={selectedIndex === index}
                                        key={index}
                                        onChange={()=>this.handleChange(index)}
                                    >
                                        <SportExpansionPanelSummary>
                                            <Typography>{ sports[key].name }</Typography>
                                        </SportExpansionPanelSummary>
                                        <SportExpansionPanelDetails>
                                            <Countries
                                                countries={sports[key].countries}
                                                handleSelectCountryDetails={this.handleSelectCountryDetails}
                                            />
                                        </SportExpansionPanelDetails>
                                    </SportExpansionPanel>
                            )
                        }
                    </Grid>
                    {
                        countryDetails && <Grid item xs>
                            <CountryDetails
                                countryDetails={countryDetails}
                                handleOnClickExpand={this.handleOnClickExpand}
                            />
                        </Grid>
                    }
                    {
                        buttonExpand && <Grid
                            container
                            direction='column'
                            item
                            spacing={2}
                            xs
                        >
                            <Grid item>
                                <DummyContainer maxWidth={false}>
                                    <Typography>
                                        EXPANDED SECTION
                                    </Typography>
                                </DummyContainer>
                            </Grid>
                            <Grid item>
                                <DummyContainer maxWidth={false}>
                                    <Typography>
                                        YOU CLICKED ON EXPANDED BUTTON
                                    </Typography>
                                </DummyContainer>
                            </Grid>
                        </Grid>
                    }
                    {
                        <Grid
                            container
                            direction='column'
                            item
                            spacing={2}
                            xl={2}
                            lg={2}
                            md={3}
                        >
                            <Grid item>
                                <DummyContainer maxWidth={false}>
                                    <Typography>
                                        BetSlip
                                    </Typography>
                                </DummyContainer>
                            </Grid>
                            <Grid item>
                                <DummyContainer maxWidth={false}>
                                    <Typography>
                                        BETSLIP CONTAINER
                                    </Typography>
                                </DummyContainer>
                            </Grid>
                        </Grid>
                    }
                </Grid>
            </SportContainer>
        );
    }
}

export default Wrapper
