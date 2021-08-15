import React,{useState,useEffect} from 'react';
// import Products from '../../components/mainPageComponents/products/Products';
// import { getProducts, getAProduct } from '../../redux/actions/productActions';
import { addToCart,deleteFromCart,setCarts,getAProductInBasket, update} from '../../redux/actions/basketAction';
import { useDispatch, useSelector } from "react-redux";
// import DetailProduct from '../../components/mainPageComponents/cart/Cart';
import Cart from '../../components/mainPageComponents/cart/Cart';
// import { useHistory } from 'react-router';
// import { Link } from 'react-router-dom';
import { Route, Switch} from "react-router-dom";
import ProductDetail from '../../components/mainPageComponents/products/ProductDetail';
// import {removeFromCart} from '../../redux/actions/basketAction';
import ProductPage from './ProductPage';
import CategoryList from './CategoryList';
import { getAProduct } from '../../redux/actions/productActions';
// import { useParams } from 'react-router';
import SuccessPayment from '../../components/mainPageComponents/CheckOut/SuccessPayment';
import FailedPayment from '../../components/mainPageComponents/CheckOut/FailedPayment'
import CheckoutForm from '../../components/mainPageComponents/CheckOut/ChackoutForm'
import PaymentForm from '../../components/mainPageComponents/CheckOut/PaymentForm';
import NavBar from '../../components/mainPageComponents/NavBar/Navbar';
function MainPage() {
    const dispatch = useDispatch();
    // const products = useSelector((state) => state.allProducts.products);
    const selectedProduct = useSelector(state => state.allProducts.selectedProduct);
    const basket = useSelector(state => state.baskets.cardProducts)
    const basketProduct = useSelector(state => state.baskets.selectedProduct)
    
    const [cart,setCart] = useState([])
    let [value, setValue] = useState([])
    const [valueOfTextFiled,setValueOfTextField] = useState(1)
    // const [title,setTitle] = useState();
    // const [description,setDescription] = useState()
    // const [category,setCategory] = useState();
    // const [price,setPrice] = useState();
    // const [image, setImage] = useState()
    // const [numbers, setNumbers] = useState()
    // useEffect(() => {
    //     dispatch(getAProduct()); 
        
    // },[]);
//    console.log(products);

    useEffect(() => {
        // dispatch(setCarts())
        //dispatch(addToCart([...basket, selectedProduct]));
    }, [])

   

    const handleAddToCard = (pro,v) => {   
        // console.log(basket);
        v = parseInt(v)
        setValue([...value,v])
        dispatch(getAProduct(pro))
        // console.log(value);
        // basket.filter(item => item.if)
        dispatch(addToCart([...basket,
          {
              'id':selectedProduct.id,
            'title':selectedProduct.title,
           'category': selectedProduct.category,
            'descripion':selectedProduct.description,
            'image':selectedProduct.image,
           'price': selectedProduct.price,
            'numbers':selectedProduct.numbers,
            'num':valueOfTextFiled}

        ]));
        
            setCart([...cart,basket])
            // setValue(v)
           
            
        console.log(value);
        
        
       
        
    }

  
   
    
    const handleDelete = (id) => {
        dispatch(deleteFromCart(id));
        dispatch(setCarts())
       
         
    }
    const handleAddValue = (id) => {
        {basket.map((item)=>{
            if(item.id === id){
                dispatch(update({'num':(parseInt(item.num)+1)}))
            }
        })}
         
    }
    
    const handleDecValue = () => {
        
    }

    return (
        <div   >

          
           <NavBar totalItems={basket.length}/>
           <div style={{marginTop:'100pxs'}}>
            {/* <Headers totalItems={cart.length} /> */}
            </div>
             <Switch>
                <Route path="/product" exact component={ProductPage} />
                <Route path="/basket/checkOut" exact component={CheckoutForm} />
                <Route path="/Payment" exact component={PaymentForm} />
                <Route path="/Payment/FailedPayment" exact component={FailedPayment} />
                <Route path="/Payment/SuccsessPayment" exact component={SuccessPayment} />
                <Route path="/product/category/:category" exact component={CategoryList} />
                <Route path="/product/:productId" exact render={props => <ProductDetail onClick={handleAddToCard} valueOfTextFiled={valueOfTextFiled} onChange={(e)=>setValueOfTextField(e.target.value)}/>}/>
                <Route path="/basket" exact render={props => <Cart  cart={basket} onDelete={handleDelete} value={basket.num} addValue={handleAddValue} decValue={handleDecValue}/>} />
                
                </Switch> 
             {/* <Products products={products} onAddToCart={handleAddToCard}/> */}
            
             
        </div>
    )
}

export default MainPage
// export default MainPage
