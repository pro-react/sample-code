import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';
import constants from './constants';

// ShoppingCart DND Spec
//    "A plain object implementing the drop target specification"
//
//  - DropTarget Methods (All optional)
//    - drop: Called when a compatible item is dropped.
//    - hover: Called when an item is hovered over the component.
//    - canDrop: Use it to specify whether the drop target is able to accept
//               the item.
const ShoppingCartSpec = {
  drop() {
    return { name: 'ShoppingCart' };
  }
};

// ShoppingCart DropTarget - collect
//  "The collecting function.
//
//  - connect: An instance of DropTargetConnector.
//             You use it to assign the drop target role to a DOM node.
//
//  - monitor: An instance of DropTargetMonitor.
//    You use it to connect state from the React DnD to props.
//    Available functions to get state include canDrop(), isOver() and didDrop()
let collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class ShoppingCart extends Component {
  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = '#FFFFFF';
    if (isActive) {
      backgroundColor = '#F7F7BD';
    } else if (canDrop) {
      backgroundColor = '#F7F7F7';
    }

    const style = {
      backgroundColor: backgroundColor
    };

    return connectDropTarget(
      <div className='shopping-cart' style={style}>
        {isActive ?
          'Hummmm, snack!' :
          'Drag here to order!'
        }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired
}

export default DropTarget(constants.SNACK, ShoppingCartSpec, collect)(ShoppingCart);
