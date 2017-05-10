import React from 'react'

export default class ModalBase extends React.Component {

	constructor(props){
		super(props);
		this.state = {data: props.categories,
			          category_name: "",
	                  parent_category_id: "0"};
	}
	closeModal(){
         this.props.closeModalHandler();
	}
	
	handleSubmit(){
		var newData = this.state.data;
		var len = newData.length;
		for(var i = 0  ; i <  len ; i++){
			if(newData[i].id == this.state.parent_category_id){
				newData[i].sublist.push(this.state.category_name);
				if(newData[i].DISPLAY_STATUS == "NON_SUBLIST"){
					newData[i].DISPLAY_STATUS = "CLOSE";
				}
			}
		}
        this.props.treeHandler(newData);
        this.closeModal(); 
        
	}

     render(){ 
     	return (
     	    <div className="modal"  role="dialog">
               <div className={"modal-dialog " + this.props.sizeClass }   role="document">
              <div className={"modal-content " + this.props.uniqueClass } >
                <div className="modal-header">
                 <button onClick={this.closeModal.bind(this)} type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                   <h4 className="modal-title">{this.props.headerTitle}</h4>
                  </div>
                 <div className="modal-body">
                 {this.props.body}
               </div>
               <div className="modal-footer">
                {this.props.footer}
             </div>
            </div>
          </div>
         </div> 
     	);
     }
}