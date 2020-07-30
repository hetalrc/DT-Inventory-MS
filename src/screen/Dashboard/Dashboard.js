import React from "react";
import { connect} from "react-redux";
import Header from "../../components/Header/Header";
import InventoryResult from "../../components/InventoryResult/InventoryResult";
import InventoryList from "../../components/InventoryList/InventoryList";
import { Grid, withStyles } from "@material-ui/core";
import Footer from "../../components/Footer/Footer";

const Dashboard = ({classes, draggedItem, dispatch}) => {

    const onDragOver = (ev) => {
      console.log("over");
      ev.preventDefault();
    };
    
    const onDrop = (ev) => {
      console.log("dropped");
      dispatch({ type: 'ADD',  draggedItem });      
    
    };
     
    return (
      <div>
        <Header/>
        <div className={classes.cardContainer}>
        <Grid container direction="column">
          <InventoryResult />
          <Grid item container  direction="row" className={classes.inventoryDetail}>
              <InventoryList title="Inventory Items"/>
              <Grid item 
              onDragOver={(e)=> onDragOver(e)}
              onDrop={(e)=> onDrop(e)}>                    
              <InventoryList title="Selected Inventory Items" isSelectedList/> 
              </Grid>
          </Grid>
        </Grid>
        </div>
        <Footer />
      </div>
    );
}

const DashboardStyles = () => ({
    cardContainer: {
        position: 'relative',
        top: '70px'
    },
   inventoryDetail:{
    top: '10px',
    boxShadow: '5px 5px 5px rgba(68, 68, 68, 0.6)',
    justifyContent: 'space-evenly',
    position: 'relative',

   }
});

const mapStateToProps = (state) => {
  return {
      draggedItem: state.inventory.draggedItem ,
      itemList: state.inventory.itemList
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

const DashboardComp = withStyles(DashboardStyles)(Dashboard);
export default connect(mapStateToProps, mapDispatchToProps)(DashboardComp);
