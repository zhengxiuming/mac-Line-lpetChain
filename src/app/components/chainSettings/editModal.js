import React from 'react';
import ModalBase from './modalBase'

export default class EditModal extends React.Component {
    constructor(props){
    	super(props);
        this.state = {categories: props.categories,
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
    submitEditHandler(){
    	this.props.editSublistItem(this.props.mainId,this.props.itemId,
                this.state.parent_category_id, this.state.category_name);

    }
    render(){

    	var footer = (<div>
                       <button  onClick={this.closeModal.bind(this)} type="button" className="modal-btn modal-cancel-btn" data-dismiss="modal">取消</button>
                       <button onClick={this.submitEditHandler.bind(this)} type="button" className="modal-btn modal-confirm-btn">更新</button>
                     </div>);

        var options = this.state.categories.map(function(choice){
            return (<option value={choice.id} key={choice.id}>{choice.name}</option>);
        }); 

        
        var selectedItem  = " "; 
        for(var i = 0; i < this.state.categories.length; i++){
            if(this.state.categories[i].id === this.props.mainId){
                  selectedItem = this.state.categories[i].sublist[this.props.itemId];
            }
        }
       
    	var body = (<div>
    		      <p><input type="text"  defaultValue={selectedItem} 
                  placeholder="请输入添加项名称" onChange={this.handleCategoryName.bind(this)} /><span>*</span> </p>
                    <p><select onChange={this.handleParentCategoryId.bind(this)} 
                    defaultValue={this.props.mainId}>
                   <option value="0">请输入添加项名称</option>
                   {options}
                </select>
                <span>*</span> </p>
    		        </div>);

    	var headerTitle = '分类修改';
    	var uniqueClass = 'category-add';
    	return (
             <ModalBase body={body} footer={footer}  headerTitle={headerTitle} 
             uniqueClass={uniqueClass} closeModalHandler={this.props.closeModalHandler} />
    	);
    }
  


}
