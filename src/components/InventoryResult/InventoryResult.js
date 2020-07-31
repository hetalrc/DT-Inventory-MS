import React from 'react';
import { Grid, Typography, withStyles } from "@material-ui/core";
import { connect, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const getAddedList = state => state.inventory.addedItemList;

const totalAmount = createSelector([getAddedList], state => {
  return state.reduce(function(prev, cur) {
    return prev + cur.cost;
  }, 0);
});

const selectedLength = createSelector([getAddedList], state => {
  return state.length;
});

const InventoryResult = ({classes}) => {
  const selecteditemLength = useSelector(selectedLength);
  const totalSelectedItemAmount = useSelector(totalAmount);
    return (
        <Grid item  className={classes.resultCard}>
        <Typography>Selected Count - {selecteditemLength}</Typography>
        <Typography>Total Amount - {totalSelectedItemAmount}</Typography>
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

  const mapDispatchToProps = (dispatch) => {
    return {
      dispatch,
    };
  };
  
  const InventoryResultComp = withStyles(ResultStyles)(InventoryResult);
  export default connect(null, mapDispatchToProps)(InventoryResultComp);