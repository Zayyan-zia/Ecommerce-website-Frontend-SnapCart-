import { Link } from "react-router-dom";
function Category(){
    return<>
    <div className="category-container">
    <h3>Featured Categories</h3>
      <p>Check out the hottest product categories chosen by our customers this month. Great deals and top-rated picks await!</p>
      <div className="category">
         <div className="category-1">
            <img src="images/shoes.png" alt="nope" />
            <h4>Shoes</h4>
            <Link id="link" to='/shoes-category'>Shop</Link>
         </div>
         <div className="category-1">
            
            <img src="images/acc.png" alt="nope" />
            <h4>Accessories</h4>
            <Link id="link" to='/accessories-category'>Shop</Link>
         </div>
         <div className="category-1">
            <img src="images/watch.png" alt="nope" />
            <h4>Watches</h4>
            <Link id="link" to='/'>Shop</Link>
         </div>
      </div>
</div>
    </>
}
export default Category;