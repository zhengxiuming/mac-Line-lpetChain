
import React, { Component } from 'react'
var moment =require("moment")

export const TIME_PERIOD_NULL = 'TIME_PERIOD_NULL';
export const TIME_PERIOD_TODAY = 'TIME_PERIOD_TODAY';
export const TIME_PERIOD_WEEK = 'TIME_PERIOD_WEEK';
export const TIME_PERIOD_MONTH = 'TIME_PERIOD_MONTH';
export const TIME_PERIOD_MONTH_PERIOD = 'TIME_PERIOD_MONTH_PERIOD';
export const TIME_PERIOD_YEAR_PERIOD = 'TIME_PERIOD_YEAR_PERIOD';

class TimePeriod extends Component {
	constructor (props) {
    	super(props);
    	this.state = {
        periods: props.periods,
        select_type:TIME_PERIOD_WEEK
      };
      this.handleClick = this.handleClick.bind(this);
    	// this.handleTransferClick = this.handleTransferClick.bind(this);
      this.isInit=false;
    	this.start_timestamp=0;
    	this.end_timestamp=0;
      this._switch_period_times(this.state.select_type)
  	}

    onChange(){

      var start_date = new Date(this.start_timestamp);
      let start_moment=moment(start_date);
      let start_time=start_moment.format('YYYY-MM-DD')

      var end_date = new Date(this.end_timestamp);
      let end_moment=moment(end_date);
      let end_time=end_moment.format('YYYY-MM-DD')
      console.log("=============")
      this.print_timestamps()
      console.log("=============")
      this.props.onChange(this.start_timestamp,this.end_timestamp,start_time,end_time)
      // debugger
    }
    onInitFinished(){

    
      if(this.isInit)
        return

      
      this.isInit=true;
              
          
      var start_date = new Date(this.start_timestamp);
      let start_moment=moment(start_date);
      let start_time=start_moment.format('YYYY-MM-DD')

      var end_date = new Date(this.end_timestamp);
      let end_moment=moment(end_date);
      let end_time=end_moment.format('YYYY-MM-DD')

      this.props.onInitFinished(this.start_timestamp,this.end_timestamp,start_time,end_time)
    }
    handleClick(period){
      // if(!period.isOn){
      //   let periods=this.state.periods;
      //   periods.forEach((per)=>{
      //       console.log(per)

      //       if(per.type==period.type){
      //           per.isOn=true;
      //       }else{
      //         per.isOn=false;
      //       }
      //   })
      //   // debugger
        // this.setState({periods:periods});
      //   this._switch_type()
      //   this.onChange()
      // }
      // console.log(period)
      console.log(this.state)
      this.setState({select_type:period.type});
      console.log(this.state)
      this._switch_period_times(period.type);
     

    }
    _get_monday_of_today(d) {
      d = new Date(d);
      var day = d.getDay(),
          diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
      return new Date(d.setDate(diff));
    }
    _get_first_day_in_month(date){
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        return firstDay;
    }
    _switch_period_times(select_type){

       switch(select_type){
           case TIME_PERIOD_TODAY:
               this.set_today_period()
               break
           case TIME_PERIOD_WEEK:
               this.set_week_period()
               break
           case TIME_PERIOD_MONTH:
               this.set_month_period()
               break
           case TIME_PERIOD_MONTH_PERIOD:
               this.set_month_in_period()
               break
           case TIME_PERIOD_YEAR_PERIOD:
               this.set_year_in_period()
               break
           
           default:
               
         }
        this.onChange();
       
    }
    clearAllSelected(){
    
      this.setState({select_type:TIME_PERIOD_NULL});
      this.start_timestamp=0;
      this.end_timestamp=0;
      // this.onChange()
    }
  	set_today_period(){
  		var currentDate = new Date();
  		let current_moment=moment(currentDate);
  		let today_str=current_moment.format('YYYY-MM-DD')
  		let start_date=new Date(today_str+" 00:00:00")
  		this.start_timestamp=start_date.getTime()
  		this.end_timestamp=currentDate.getTime()
  		this.print_timestamps()
      // this.onChange()
  	}
  	set_week_period(){
  		var currentDate = new Date();
      var monday=this._get_monday_of_today(currentDate);
      let monday_str=moment(monday).format('YYYY-MM-DD')
      let start_date=new Date(monday_str+" 00:00:00")
      this.start_timestamp=start_date.getTime()
      this.end_timestamp=currentDate.getTime()
      // this.onChange()
      this.print_timestamps()
      // console.log(monday)
  	}
    set_month_period(){
      var currentDate = new Date();
      var monday=this._get_first_day_in_month(currentDate);
      let monday_str=moment(monday).format('YYYY-MM-DD')
      let start_date=new Date(monday_str+" 00:00:00")
      this.start_timestamp=start_date.getTime()
      this.end_timestamp=currentDate.getTime()
      // this.onChange()
      this.print_timestamps()
    }
    /**
    * 一个月内，即从30天前到今天
    */
    set_month_in_period(){
       var currentDate = new Date();
       this.end_timestamp=currentDate.getTime()

       var start_date = new Date();
       start_date.setDate(currentDate.getDate() - 30);
       this.start_timestamp=start_date.getTime()
       // this.onChange()
       this.print_timestamps()
    }
     /**
    * 一个年内，即从365天前到今天
    */
    set_year_in_period(){
       var currentDate = new Date();
       this.end_timestamp=currentDate.getTime()

       var start_date = new Date();
       start_date.setDate(currentDate.getDate() - 365);
       this.start_timestamp=start_date.getTime()
       // this.onChange()
       this.print_timestamps()
    }

  	print_timestamps(){
  		console.log("start_timestamp is:"+moment(this.start_timestamp).format('YYYY-MM-DD HH:mm:ss'))
  		console.log("end_timestamp is:"+moment(this.end_timestamp).format('YYYY-MM-DD HH:mm:ss'))
  	}
    render(){

    	// debugger
    	// this.set_today_period()
      // this.set_week_period()
      // this.set_month_period()
      // this.set_month_in_period()
      // this.set_year_in_period()
        var handleClick=this.handleClick
        var {periods,select_type} =this.state
        console.log(this.state)
        return (
          <div className="from-time-period">
            {periods.map(
            	function(period,index){
            		let _className=""
            		if(period.type==select_type){
            			_className="on"
                  // console.log(period)
                  // this._switch_period_times()
                }
            		return <span onClick={()=>{
                  
                  handleClick(period)
                }} type={period.type} className={_className}>{period.name} </span>
            	}.bind(this)
            )}
            {this.onInitFinished()}
            
            
          </div>
        )
    }
};
export default TimePeriod;

