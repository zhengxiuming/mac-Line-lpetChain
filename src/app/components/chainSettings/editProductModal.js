import React from 'react';
import ModalBase from './modalBase'

export default class EditProductModal extends React.Component {
    constructor(props){
        super(props);
    }
    closeModal(){
        this.props.closeModalHandler();   
    }
    saveProductHandler(){
        //this.props.deleteSublistItem(this.props.mainId,this.props.itemId);
        alert('saveProductHandler');

    }
    saveContinueHandler(){
        alert('saveContinueHandler');
    }

    render(){
        var footer = (<div>

                     <button type="button"  onClick={this.closeModal.bind(this)} className="modal-btn modal-cancel-btn" data-dismiss="modal">取消</button>
                     <button type="button"  onClick={this.saveProductHandler.bind(this)} className="modal-btn modal-confirm-btn">保存</button>
                      <button type="button" onClick={this.saveContinueHandler.bind(this)} className="modal-btn modal-confirm-btn">保存&继续</button>

                     </div>);

        var body = (<div>
              <fieldset>
                <h5><span>基本信息</span></h5>
                <div className="form-item">
                    <label htmlFor="product-name">产品名称</label>
                    <input  className="lg-input"  type="text" name="product-name" />
                    <label htmlFor="product-unit">单位</label>
                    <input className="xs-input" type="text" name="product-unit" />
                    <label htmlFor="product-name">规格</label>
                    <input className="sm-input" type="text" name="product-price" />

                 </div>
                  <div className="form-item">
                    <label htmlFor="product-name">生产广家</label>
                    <input className="lg-input" type="text" name="product-name" />
                    <label htmlFor="product-unit">条形码</label>
                    <input className="md-input" type="text" name="product-unit" />
                  </div>
             </fieldset>
             <fieldset>
              <h5><span>价格设置</span></h5>
                  <div className="form-item">
                    <label htmlFor="product-name">销售单价:</label>
                    <input  style={{width:"276px"}}type="text" name="product-name" />
                    <label htmlFor="product-unit">最低售价:</label>
                    <input style={{width:"276px"}} type="text" name="product-unit" />
                  </div>
                  <div className="form-item">
                    <label htmlFor="product-name">参考进价:</label>
                    <input style={{width:"276px"}}  type="text" name="product-name" />
                    <label htmlFor="product-unit">批发售价:</label>
                    <input style={{width:"276px"}} type="text" name="product-unit" />
                  </div>
                  <div className="form-item">
                    <input type="checkbox" /><label>会员卡赠额可以使用会员价</label>
                    <input type="checkbox" /><label>会员价:</label>
                    <input type="text" name="product-unit" />
                  </div>
             </fieldset>
              <fieldset>
                  <h5><span>库存提醒</span></h5>
                  <div className="form-item">
                      <label htmlFor="">库存下限:</label>
                      <input type="text" /><span>库存量低于下限时将自动提醒</span>
                      <input type="checkbox" /><label>过期日期:</label>
                      <select>
                          <option>20-12-34</option>
                          <option>20-12-34</option>
                      </select>
                      <span>过期日期前一周将自动提醒</span>
                  </div>
              </fieldset>
              <fieldset>
                  <h5><span>提成设置</span></h5>
                  <div className="form-item">
                    <label>服务提成</label>
                    <input type="checkbox" />按比例（%）：<input type="text" />
                    <label>按固定额:</label>
                    <input type="text"  />
                  </div>
                  <div className="form-item">
                    <label>销售提成</label>
                    <input type="checkbox" /><label>按比例（%）：</label><input type="text" />
                    <label>按固定额:</label>
                    <input type="text"  />
                  </div>
                  </fieldset>
                  <fieldset>
                  <h5><span>特殊设置</span></h5>
                  <div className="form-item">
                      <input type="checkbox" /><label>使用别名 </label><input type="text" /><span>勾选后，系统在打印小票，选择一键隐藏时，将自动显示别名 </span>
                  </div>
                  <div className="form-item">
                      <input type="checkbox" /><label>参与打折</label>
                      <input type="checkbox" /><label>参与积分</label>
                      <input type="checkbox" /><label>计算库存</label>
                      <input type="checkbox" /><label>有批号商品</label>
                  </div> 
              </fieldset>
                    </div>);

        var headerTitle = '添加商品<span>编号:P10000101</span>';
        var uniqueClass = 'category-edit-product';
        var sizeClass =  'modal-large-dialog';
        return (
             <ModalBase body={body} footer={footer}  headerTitle={headerTitle}  sizeClass={sizeClass}
             uniqueClass={uniqueClass} closeModalHandler={this.props.closeModalHandler} />
        );
    }
  


}
