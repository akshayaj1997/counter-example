import React,{Component} from 'react';
import {connect}from 'react-redux';
 class ServerValuesDisplay extends Component {
     render()
     {
         return(<div>
               <button onClick={() =>this.props.getValues()}>Send Values</button> &nbsp;
         </div>)
     }
}
const mapStateToProps = (state) => {
    return {
        serverValues:state.serverValues
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getValues: dispatch.getServerValue
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ServerValuesDisplay)