/**
 * page/Product.js
 * 产品列表页面
 * author: zhangxiaojuan  1197189535@qq.com
 **/
import { connect } from 'dva';
import ProductList from '../component/ProductList';

const Product = ({ dispatch, products})=>{
  function handleDelete(id){
    dispatch({
      type:'products/delete',
      payload:id,
    })
  }
   console.log('products,',products)
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  )
};

export default connect(({products})=>({
  products
}))(Product)

