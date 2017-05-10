
import React from "react";
import CategoryTree from './categoryTree';
import ExpensesList from './expensesList';
import Modal from './modal';
import EXPENSES_LIST_DATA from '../../data/expensesData';
import PRODUCT_CATEGORY from '../../data/categoriesData';


export default class Expenses extends React.Component {
    constructor(props){
          super(props);
          this.state = {categoryUrl: 'http://localhost:9000/categories/get.php'};
     }
     render(){
      console.log();
     	return (
     		<div className="expenses-content">
                <CategoryTree url={this.state.categoryUrl} /> 
                <ExpensesList expenses_list={EXPENSES_LIST_DATA} />
            </div>
     	);
     }
}
