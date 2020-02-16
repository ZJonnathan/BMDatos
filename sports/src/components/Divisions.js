import React from 'react';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Matches from './Matches'
import { withStyles } from '@material-ui/core/styles';

const DivisionsContainer = withStyles({
    root: {
        padding: 0
    },
  })(Container);

const DivisionsExpansionPanel = withStyles({
    root: {
      '&$expanded': {
        margin: 0,
      },
    },
    expanded: {},
  })(ExpansionPanel);

  const DivisionsExpansionPanelSummary = withStyles({
    root: {
      backgroundColor: '#bbdefb',
      color: '#000000'
    },
  })(ExpansionPanelSummary);
  
  const DivisionsExpansionPanelDetails = withStyles(theme => ({
    root: {
      padding: 0,
    },
  }))(ExpansionPanelDetails);
  
class Divisions extends React.Component {

    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this)
    }

    state={
        selectedIndex: -1
    }

    handleChange = (index) => this.setState({selectedIndex: this.state.selectedIndex === index ? -1 : index})

    render() {
        const { divisions, handleOnClickExpand } = this.props
        const { selectedIndex } = this.state
        return (
            <DivisionsContainer maxWidth={false}>
                {
                    divisions.map(
                        (division, index) => 
                            <DivisionsExpansionPanel
                                expanded={selectedIndex === index}
                                key={index}
                                onChange={()=>this.handleChange(index)}
                            >
                                <DivisionsExpansionPanelSummary>
                                    <Typography>{`Division ${index + 1}`}</Typography>
                                </DivisionsExpansionPanelSummary>
                                <DivisionsExpansionPanelDetails>
                                    <Matches
                                        matches={division.matches}
                                        handleOnClickExpand={handleOnClickExpand}
                                    />
                                </DivisionsExpansionPanelDetails>
                            </DivisionsExpansionPanel>
                    )
                }
            </DivisionsContainer>
        );
    }
}

export default Divisions