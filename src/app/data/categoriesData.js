const PRODUCT_CATEGORY = [
       {name: '全部商品',
        id: 1,
        sublist: [],
        DISPLAY_STATUS: 'NON_SUBLIST'
       },
       {name: '挂号',
        id: 2,
        sublist: [],
        DISPLAY_STATUS: 'NON_SUBLIST'
       },
       {name: '处方',
        id: 3,
        sublist: ['自制药品','自制药片','处方艮','处方艮'],
        DISPLAY_STATUS: 'OPEN'
       },
       {name: '处置',
        id: 9,
        sublist: ['自制药品','自制药片','处方艮','处方艮'],
        DISPLAY_STATUS: 'CLOSE'
       },
       {name: '商品',
        id: 4,
        sublist: [],
        DISPLAY_STATUS: 'NON_SUBLIST',
       },
       {name: '美容',
        id: 5,
        sublist: ['自制药品','自制药片','处方艮','处方艮'],
        DISPLAY_STATUS: 'CLOSE'
       },
       {name: '处置',
        id: 6,
        sublist: [],
        DISPLAY_STATUS: 'NON_SUBLIST'
       },
       {name: '商品',
        id: 7,
        sublist: [],
        DISPLAY_STATUS: 'NON_SUBLIST'
       },
       {name: '美容',
       id: 8,
        sublist: [],
        DISPLAY_STATUS: 'NON_SUBLIST' 
      }

];
export default PRODUCT_CATEGORY;