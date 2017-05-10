/**
 * Created by zhengxiuming on 2016/10/12.
 */
import React, {Component, PropTypes} from 'react';

class RevenueRanking extends Component {
    render() {
        var compare=function (prop) {
            return function (a, b) {
                var val1=a[prop];
                var val2=b[prop];
                if(!isNaN(Number(val1)&&!isNaN(Number(val2)))){
                    val1=Number(val1);
                    val2=Number(val2);
                }
                if(val1<val2){
                    return 1;
                }else if(val1>val2){
                    return -1
                }else {
                    return 0;
                }
            }
        };
        var data=this.props.data;
        var revenueList=data.sort(compare("money"));
        return (
            <div className="data-ranking-content">
                <ul>
                    {revenueList.map(function (item,index) {
                        return <li className="clearfix">
                                    <div className="hospital-index">{index+1}</div>
                                    <div className="hospital-ranking">
                                        <div>{item.name}</div>
                                        <div className="money">¥{item.money}</div>
                                    </div>
                                </li>
                    })}
                </ul>
            </div>
        )
    }
}
export default RevenueRanking;