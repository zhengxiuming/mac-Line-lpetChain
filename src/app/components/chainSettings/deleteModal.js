import React from 'react';
import ModalBase from './modalBase'

export default class DeleteModal extends React.Component {
    constructor(props){
    	super(props);
    }
    closeModal(){
    	this.props.closeModalHandler();
    	
    }
    submitDeleteHandler(){
    	this.props.deleteSublistItem(this.props.mainId,this.props.itemId);

    }
    render(){
    	var footer = (<div>
    		           <button type="button" onClick={this.closeModal.bind(this)} className="modal-btn modal-cancel-btn" data-dismiss="modal">取消</button>
                       <button type="button" onClick={this.submitDeleteHandler.bind(this)} className="modal-btn modal-confirm-btn">删除</button>
                     </div>);
    	var body = (<div>
    		        <p><img src="public/images/warning.png" />你确定要删除xxxxx吗？删除xxx这个分类下所有项目都会被删除。</p>
    		        </div>);

    	var headerTitle = '提示';
    	var uniqueClass = 'category-delete';
    	return (
             <ModalBase body={body} footer={footer}  headerTitle={headerTitle} 
             uniqueClass={uniqueClass} closeModalHandler={this.props.closeModalHandler} />
    	);
    }
  


}
