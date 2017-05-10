
import React from "react"
import Modal from './modal'
import DeleteModal from './deleteModal'
import EditModal from './editModal'
import ReactDOM  from "react-dom" 


class Item extends React.Component {

  constructor(props){
     super(props);
     this.state = {isOpen: false};
     //this.processSublist = this.processSublist.bind(this);
  }
  
  processSublist(){
     
     if(!this.state.isOpen ){
          this.setState({isOpen:true});
     }else {
          this.setState({isOpen:false});
     } 
     
  }

  render() {
    //console.log(this.state.display_status);
    //console.log("name" + this.props.text); 
    //console.log("status" + this.props.display_status); 
    if(this.props.sublist.length === 0){
      return (

         <li><span className="icon-right-arrow"></span>{this.props.text}</li>
      );

    }else {

      if (!this.state.isOpen){
           return (
             <li><span onClick={this.processSublist.bind(this)}  className="icon-plus"></span>{this.props.text}</li>
         );

          

      }else {
        var subcategory_list = [];
     
        for(var j = 0; j < this.props.sublist.length; j++){
                  subcategory_list.push(<SubItem openModalHandler={this.props.openModalHandler} 
                                                 closeModalHandler={this.props.closeModalHandler}
                                                 mainId = {this.props.mainId} 
                                                 itemId = {j} 
                                                 key={j}  subtext={this.props.sublist[j]} 
                                                 deleteSublistItem={this.props.deleteSublistItem}
                                                 categories={this.props.categories} 
                                                 editSublistItem={this.props.editSublistItem} />);
         }
         return (
           <li><span onClick={this.processSublist.bind(this)} className="icon-minus"></span>{this.props.text}
              <ul className="sub-list">
              {subcategory_list}
              </ul>
              <div  className="clear-bar"></div>
           </li>
        );

      }
      
    }
    
  }

}

class SubItem extends React.Component {

  constructor(){
    super();
    this.state = {isActive: false};
  }
  handleActive(){
    this.setState({isActive: true});
  }
  handleOnMouseleave(){
    this.setState({isActive: false});
  }
  openDeleteModalHandler(){
     var dialog = (<div> 
                    <div className="modal-backdrop in">
                    </div>
                   <DeleteModal mainId={this.props.mainId} itemId={this.props.itemId}  
                   closeModalHandler={this.props.closeModalHandler} 
                   deleteSublistItem={this.props.deleteSublistItem} /> </div>); 
     this.props.openModalHandler(dialog);

  }
  openEditModalHandler(){
     var dialog = (<div> 
                    <div className="modal-backdrop in">
                    </div>
                   <EditModal mainId={this.props.mainId} itemId={this.props.itemId}  
                   closeModalHandler={this.props.closeModalHandler} 
                   categories={this.props.categories} 
                   editSublistItem={this.props.editSublistItem} /> </div>); 
     this.props.openModalHandler(dialog);

  }
  render() {
     if(this.state.isActive){
      return (
        <li onClick={this.handleActive.bind(this)}  
            onMouseLeave={this.handleOnMouseleave.bind(this)} className="sub-list-item sub-list-active"><span className="hz-bar"></span>
         <span  className="icon-unboxed-right-arrow"></span>{this.props.subtext}
         <span onClick={this.openDeleteModalHandler.bind(this)} className="delete-icon"></span>
         <span onClick={this.openEditModalHandler.bind(this)} className="edit-icon"></span>
         </li>
    );
     }else {
       return (
         <li onClick={this.handleActive.bind(this)} 
             onMouseEnter={this.handleActive.bind(this)} className="sub-list-item"><span className="hz-bar"></span>
         <span  className="icon-unboxed-right-arrow"></span>{this.props.subtext}
         </li>
    );
     }
    
  }

}

class HeaderTree extends React.Component {

  constructor(){
    super();
    this.state = {modal:" "};
  }
  closeModalHandler(){
    this.setState({modal: " "});
  }
  openModal(){
    var dialog = (<div>
                   <div className="modal-backdrop in">
                   </div>
                    <Modal categories={this.props.categories} closeModalHandler={ () => this.setState({modal: " "})} 
                    treeHandler={this.props.treeHandler} />
                  
                </div>);
     this.setState({modal: dialog});
  }
  closeModalHandler(){
    this.setState({modal: " "});
  }
  render(){
    return (
      <div>
        {this.state.modal}
        <div className="header-tree"><p>分类列表<span onClick= {this.openModal.bind(this)} className="d2">添加分类</span></p></div>
       </div>
    );
  }
}

export default class CategoryTree extends React.Component {
    constructor(props){
          super(props);
          this.state = {categories: [],modal: ""};
    }
    deleteSublistItem(mainId, itemId){
        var newCategories = this.state.categories;
        for(var i=0; i < newCategories.length; i++){
           if(newCategories[i].id === mainId){
               newCategories[i].sublist.splice(itemId,1);
               break;
           }
        }
        /*$.ajax({
             url: 'http://localhost:9000/categories/delete.php',
             dataType: 'json',
             cache: false,
             data: {main_id: mainId, item_id: itemId},
             success: function(data){
                console.log(data);
                this.setState({categories: newCategories,modal: ""});
               }.bind(this),
             error: function(xhr, status, err){
                 console.error(this.props.url, status, err.toString());
              }.bind(this)
          }); */
        this.setState({categories: newCategories,modal: ""});

    }
     editSublistItem(mainId, itemId, newMainId, newItemName){
        console.log('mainId :' +mainId);
        console.log('itemId :' +itemId);
        console.log('newMainId :' +newMainId);
        console.log('newItemName :' +newItemName);
        var newCategories = this.state.categories;

        for(var i=0; i < newCategories.length; i++){
           if(newCategories[i].id === mainId){
               newCategories[i].sublist.splice(itemId,1,newItemName);
               break;
           }
        }
        this.setState({categories: newCategories,modal: ""});
    }

    componentDidMount(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({categories: data});
      }.bind(this),
      error: function(xhr, status, err){
         console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
   }
     render(){
      //console.log("CategoryTree");
      //console.log(this.state.categories);
      var category_list = [] ;
      var cats = this.state.categories;
      for(var i = 0; i < cats.length; i++){
             category_list.push(<Item openModalHandler={(dialog) =>this.setState({modal:dialog}) } 
               closeModalHandler={() => this.setState({modal:""})} 
               deleteSublistItem={this.deleteSublistItem.bind(this)} 
               editSublistItem={this.editSublistItem.bind(this)}
               categories={this.state.categories} 
              key={i} mainId={cats[i].id} text={cats[i].name} sublist={cats[i].sublist} display_status={cats[i].DISPLAY_STATUS} />);
                
      }
      
      return (
      <div className="tree-container">
           {this.state.modal}
           <HeaderTree categories={cats} treeHandler={(cats)=> this.setState({categories: cats})} />
           <ul id="list-tree">
               {category_list}
          </ul>
         
      </div>
      );
     }
}

