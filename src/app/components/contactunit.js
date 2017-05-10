
import React from 'react';


class Contactunit extends React.Component {
     render(){
     	  var messages = ['Learn React','Learn Redux','Design Patterns','Data structure'];
           return (
               <div className="indexBox">
                   <MessageList messages={messages} />
                </div>
            )
       }
  }


class Button extends React.Component {
	render(){
		return (
			<button style={{background: this.context.color}}>
			  {this.props.children}
			</button>
		);
	}
}
Button.contextTypes = {
	color: React.PropTypes.string
};

class Message extends React.Component {
	render(){
		return (
			 <div>
			 <p>{this.props.text}</p> <Button> Delete</Button>
			 </div>
		);
	}
}
var defineProp = function(obj, key, value){
	config.value= value;
	Object.defineProperty(obj,key,config);
}
class MessageList extends React.Component {
	constructor(){
		super();
		this.state = {color: 'purple'};
	}
	changehandler(){
		
		var entry = Object.create(null);
		Object.defineProperty(entry, 'value',{
           value: '$500.8',
           writable: true,
           enumerable: true,
           configurable: true
		});
		console.log(entry);

		this.setState({color: 'green'});
	}
	getChildContext(){
		return {color: this.state.color};
	}
	render(){
		const children = this.props.messages.map((message, i) => 
			<div key = {i} onClick={this.changehandler.bind(this)}>
			   <Message  text={message.text} />
			</div>
			);
		return <div>{children}</div>
	}
}
MessageList.childContextTypes = {
	color: React.PropTypes.string
};
export default Contactunit;


