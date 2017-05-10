import React from "react";



export default class Modal extends React.Component {

	constructor(props){
		super(props);
		this.state = {data: props.categories,
			          category_name: "",
	                  parent_category_id: "0"};
	}
	shouldComponentUpdate(nextProps, nextState){
		return false;
	}
	closeModal(){
         this.props.closeModalHandler();
	}
	handleCategoryName(e){
		this.setState({category_name: e.target.value});
	}
	handleParentCategoryId(e){
		this.setState({parent_category_id: e.target.value});
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
     	console.log(this.state.data);
     	var options = this.state.data.map(function(choice){
     		return (<option value={choice.id} key={choice.id}>{choice.name}</option>);
     	});
         
     	return (
     	    <div className="modal"  role="dialog">
               <div className="modal-dialog" role="document">
              <div className="modal-content category-add">
                <div className="modal-header">
                 <button onClick={this.closeModal.bind(this)} type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                   <h4 className="modal-title">添加分类</h4>
                  </div>
                 <div className="modal-body">
                 <p><input type="text"  placeholder="请输入添加项名称" onChange={this.handleCategoryName.bind(this)} /><span>*</span> </p>
                <p><select onChange={this.handleParentCategoryId.bind(this)} >
                   <option value="0">请输入添加项名称</option>
                   {options}
                </select>
                <span>*</span> </p>
               </div>
               <div className="modal-footer">
               <button  onClick={this.closeModal.bind(this)} type="button" className="modal-btn modal-cancel-btn" data-dismiss="modal">取消</button>
               <button onClick={this.handleSubmit.bind(this)} type="button" className="modal-btn modal-confirm-btn">创建</button>
             </div>
            </div>
          </div>
         </div> 
     	);
     }
}