import React from 'react';
import { Grid, Typography, withStyles } from "@material-ui/core";
import { connect } from 'react-redux';

const InventoryResult = ({classes, addedItemList=[]}) => {
    const totalCost = addedItemList.reduce(function(prev, cur) {
        return prev + cur.cost;
      }, 0);
    return (
        <Grid item  className={classes.resultCard}>
        <Typography>Selected Count - {addedItemList.length}</Typography>
        <Typography>Total Amount - {totalCost}</Typography>
        </Grid>
    );
};

const ResultStyles = () => ({
    resultCard:{
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        boxShadow: '5px 5px 5px rgba(68, 68, 68, 0.6)',
        '&>p': {
            padding: '10px'
        }
    }
});

const mapStateToProps = (state) => {
    return {
        addedItemList: state.inventory.addedItemList
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      dispatch,
    };
  };
  
  const InventoryResultComp = withStyles(ResultStyles)(InventoryResult);
  export default connect(mapStateToProps, mapDispatchToProps)(InventoryResultComp);