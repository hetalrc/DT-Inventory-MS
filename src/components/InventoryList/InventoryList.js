import React from 'react';
import { List, ListItem, ListItemText, IconButton, ListItemSecondaryAction, withStyles, Typography, Grid } from '@material-ui/core';
import { Check, Delete, DragIndicator } from '@material-ui/icons';
import { connect } from 'react-redux';
import classNames from "classnames";


/**
 * Shows List of Inventory items
 @param  title - Label Of inventory list
 @param  isSelectedList - flag to identify List Type, default is false
 @param  classes - styles provided by withStyles
 @param  classes - styles provided by withStyles
 @param  itemList, dispatch, addItemList - items provided by mapStateToProps, mapDispatchToProps 
 */


const InventoryList = ({classes, title, isSelectedList=false, itemList, dispatch, addedItemList}) => {
    const list = isSelectedList ? addedItemList : itemList;
    
    const handleAction = inventory => {    
        if(inventory.added && isSelectedList){
            dispatch({ type: 'DELETE', id: inventory.id })
        }else{
            return true;
        }

      }
      const onDragStart = (ev, item) => {
        if(item.draggable){
            dispatch({type: 'DRAGGED', item:item});
        }
      };
    
    if(!list.length && isSelectedList){
      return (
        <Grid container direction="column">
        <Grid item><Typography >{title}</Typography></Grid>
        <Grid item><Typography >Drop your items here</Typography></Grid>
        </Grid>
      )
    }
    return(
      <Grid>
      <Typography >{title}</Typography>
      <List>
        {list &&
          list.map((item, i) => {
            return (
              <ListItem
              className={classNames(classes.productCard,{
                [classes.selected]: item.added,
                [classes.deselect]: !item.draggable,
              })}
              divider={true}
                key={i}
                draggable={item.draggable}
                onDragStart={(e) => onDragStart(e, item)}
              >
                <ListItemText
                  primary={item.name}
                  secondary={`AED ${item.cost}` || null}
                />
                <ListItemSecondaryAction onClick={()=> { handleAction(item)}}>
                  <IconButton
                    size="medium"
                  >
                    {item.draggable ? (
                      <DragIndicator />) : isSelectedList && item.added ?
                        (<Delete />): (<Check/>)
                      
                    }
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
      </List>
      </Grid>
    );
}

const mapStateToProps = (state) => {
    return {
        itemList: state.inventory ? state.inventory.itemList : [],
        addedItemList: state.inventory ? state.inventory.addedItemList : [],
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      dispatch,
    };
  };

  const style = () => ({
    productCard:{
        width: '300px',
        paddingBottom:'5px',
        background: '#737cc3',
        cursor: 'grab'
    },
    selected: {
        background: '#27b741'
    },
    deselect:{
      cursor: 'default'
    }
  });

  const InventoryListComp = withStyles(style)(InventoryList);
  
  export default connect(mapStateToProps, mapDispatchToProps)(InventoryListComp);