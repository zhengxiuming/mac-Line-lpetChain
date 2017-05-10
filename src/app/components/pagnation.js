/**
 * Created by zxm on 2016/9/10 0010.
 */
import React from 'react';
import {render} from 'react-dom';
var Page = React.createClass({
    getInitialState: function() {
        return {value : ''};
    },
    handClick : function(e){
        let sel = this;
        return function(){
            sel.setState({current : e});
        }
    },
    handChange : function(e){
        this.setState({value : e.target.value})
    },
    goNext : function(){
        let cur = this.state.current;
        if(cur < this.props.total){
            this.setState({current : cur + 1});
        }
    },
    goPrev : function(){
        let cur = this.props.current;
        if(cur > 1){
            this.setState({current : cur - 1});
        }
    },
    goPage : function(){
        var val = this.state.value;
        if(!/^[1-9]\d*$/.test(val)){
            alert('页码只能输入大于1的正整数');
        }else if(parseInt(val) > parseInt(this.props.total)){
            alert('没有这么多页');
        }else{
            this.setState({current : val});
        }
    },
    render : function(){
        let self = this;
        let total = this.props.total;
        let cur = this.props.current;
        let items = [];
        let begin;
        let len;
        if(total > 5){
            len = 5;
            if(cur >= (total-2)){
                begin = total - 4;
            }else if(cur <= 3){
                begin = 1;
            }else{
                begin = cur - 2;
            }
        }else{
            len = total;
            begin = 1;
        }
        for(let i = 0; i < len; i ++){
            let cur = this.props.current;
            let showI = begin + i;
            if(cur == showI){
                items.push({num : showI, cur : true});
            }else{
                items.push({num : showI, cur : false});
            }

        }
        return  <div className="ui-pagnation">
            <div className="sum">
                共计
                <span className="num-total"></span>
                人
            </div>
            <a className={this.props.current == 1? 'page disable' : 'page'} onClick={this.goPrev}>上一页</a>
            <span className="pagnation-cols">
                        {
                            items.map(function(item){
                                return <a onClick={self.handClick(item.num)} key={item.num} className={item.cur? 'pageList current' : 'pageList'}>{item.num}</a>
                            })
                        }
            </span>
            <div className="num">
                <input type="text" value={self.state.value} onChange={this.handChange}/>
                <span>/</span>
                <span>{total}</span>
            </div>
            <a className={this.props.current == this.props.total? 'page disable' : 'page'} onClick={this.goNext}>下一页</a>
        </div>
    }
});

export default Page;