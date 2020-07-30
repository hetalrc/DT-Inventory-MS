import {defaultItemList} from '../constants';


const inventory = (state = [], action) => {
    switch (action.type) {
      case 'DRAGGED':
          return {
            ...state,
            draggedItem: action.item
        };
      case 'ADD':
          const updatedItemList = state.itemList.map(item =>
            (item.id === action.draggedItem.id)
              ? {...item, 
                added: true,
                draggable: false,
              }
              : item
          );
        
        return {
            ...state,
            draggedItem: null,
            addedItemList: [
                ...state.addedItemList,
                {
                  id: action.draggedItem.id,
                  name: action.draggedItem.name,
                  cost: action.draggedItem.cost,
                  draggable: false,
                  added: true,
      
                }
              ],
            itemList: updatedItemList
        };

    case 'DELETE':       
        const updateItemList = state.addedItemList.filter(item => item.id !== action.id);
        const enableItems = state.itemList.map(inventory =>
            (inventory.id === action.id)
              ? {...inventory, draggable: true,added: false}
              : inventory
          );
        return {
            ...state,
            addedItemList: updateItemList,
            itemList: enableItems,
        };
     
      default:
        return {
            itemList: defaultItemList,
            addedItemList:[],  
            
        }
    }
  }

  
  export default inventory;
  