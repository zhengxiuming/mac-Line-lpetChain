
import React from 'react'
import DeleteExpensesModal from './deleteExpensesModal'
import EditProductModal from './editProductModal'


export default class ExpensesList extends React.Component {
     constructor(props){
        super(props)
        this.state = { data: props.expenses_list, 
                       keyword: "",
                       modal:" ",
                       serial_number_list : [] };
        this.onCheckboxHandler = this.onCheckboxHandler.bind(this);
     }
     onChangeSearchHandler(event){
        var search_phrase = event.target.value;
        this.setState({keyword: search_phrase});
     }
     searchHandler(){
        results = [];
        if(this.state.keyword){
             //set to the save the requests
        }
        this.setState({data: results});
     }
     deleteExpensesHandler(){
       
        var newData = [];
        for(var i = 0; i < this.state.data.length; i++){
            if(this.state.serial_number_list.indexOf(this.state.data[i].serial_number) === -1){
                newData.push(this.state.data[i]);
            }
        }
        this.setState({data: newData, modal: '',serial_number_list: []});
     }
     openDeleteExpensesModalHandler(){
              var dialog = (<div> 
                    <div className="modal-backdrop in">
                    </div>
                   <DeleteExpensesModal 
                   closeModalHandler={() => this.setState({modal:""})} 
                   deleteExpenses={this.deleteExpensesHandler.bind(this)} /> 
                   </div>); 

                   this.setState({modal:dialog}); 
                   

    }
    openEditProductModalHandler(){
              var dialog = (<div> 
                    <div className="modal-backdrop in">
                    </div>
                   <EditProductModal 
                   closeModalHandler={() => this.setState({modal:""})} 
                   deleteExpenses={this.deleteExpensesHandler.bind(this)} /> 
                   </div>); 

                   this.setState({modal:dialog}); 
                   

    }
    onCheckboxHandler (e) {
        var newList = this.state.serial_number_list.map(function(item){
            return item;
        });
         var newData = this.state.data.map(function(item){
            return item;
         });
            var currentCheck = e.target.value;
            var index = newList.indexOf(currentCheck);

            //find index
            var main_index;
            for(var i = 0; i < newData.length; i++){
                if(newData[i].serial_number == currentCheck){
                    main_index = i;
                    break;
                }
            }
         if(e.target.checked){
            if( index ===  -1){
                 newList.push(currentCheck);
                 newData[main_index].checkedStatus = true;
            }
         }else {
            if (index > -1){
                  newList.splice(index,1);
                  newData[main_index].checkedStatus = false;
            }

         }
          
          this.setState({serial_number_list:newList});    
                
     }
     onCheckboxAllHandler(e){
        if(e.target.checked){
            var newList = this.state.data.map(function(item){
                return item.serial_number;
            });
            var newData = this.state.data.map(function(item){
                 item.checkedStatus = true;
                 return item;
            });
            this.setState({data:newData, serial_number_list:newList});  
        }else {
           var newData = this.state.data.map(function(item){
                 item.checkedStatus = false;
                 return item;
            });
             this.setState({data: newData, serial_number_list:[]});
        }
     }
     deleteOneHandler(e){
          var newList = this.state.serial_number_list.map(function(item){
            return item;
         });
          // feature data attributes with html5
          if(newList.indexOf(e.target.dataset.serial) === -1){
                 newList.push(e.target.dataset.serial);
                 //newData[main_index].checkedStatus = true;
                 this.setState({serial_number_list:newList}); 

            }
            this.openDeleteExpensesModalHandler();


     }



     render(){
        console.log('keyword');
        console.log(this.state.keyword);
        var tbodyContent = [];
        var content = this.state.data;
        for(var i = 0; i < content.length; i++ ){
            tbodyContent.push(
                      <tr key={content[i].serial_number}>
                     <td><input onChange={this.onCheckboxHandler} type="checkbox" 
                         checked={content[i].checkedStatus}  value={content[i].serial_number} /></td>
                     <td>{content[i].serial_number}</td>
                     <td>{content[i].product_name}</td>
                     <td>{content[i].standard}</td>
                     <td>{content[i].unit}</td>
                     <td>{content[i].manifacturer}</td>
                     <td>{content[i].barcode}</td>
                     <td><span data-serial={content[i].serial_number} onClick={this.deleteOneHandler.bind(this)} className="delete-icon"></span></td>
                     <td><span className="edit-icon"></span></td>
                 </tr>);
        }
     	return (
     	    <div className="table-container">
            {this.state.modal}
         <div className="header-table">
             <ul className="breadcrumb">
                 <li>商品</li>
                 <li>服务清单</li>
             </ul>
             <ul className="table-actions">
                <li><input onChange={this.onChangeSearchHandler.bind(this)} type="text"  placeholder="请输入商品编号／名称／条形码" />
                    <span  onClick={this.searchHandler.bind(this)} className="icon-search"></span></li>
                <li onClick={this.openDeleteExpensesModalHandler.bind(this)}><span  className="icon-delete-item"></span>删除选择</li>
                <li onClick={this.openEditProductModalHandler.bind(this)}><span className="icon-add-item"></span>添加</li>
             </ul>
             
         </div>
         <table>
             <thead>
                 <tr>
                     <th><input onChange={this.onCheckboxAllHandler.bind(this)} type="checkbox" value="all" /></th> 
                     <th>编辑号</th>
                     <th>商品名称</th>
                     <th>规格</th>
                     <th>单位</th>
                     <th>厂家</th>
                     <th>条形码</th>
                     <th>编辑</th>
                     <th>删除</th>
                 </tr>
             </thead>
             <tbody>
               {tbodyContent} 
             </tbody>
         </table>
     </div>
     	);
     }
}
ExpensesList.propTypes = {expenses_list: React.PropTypes.array};
ExpensesList.defaultProps = {expenses_list: []};


