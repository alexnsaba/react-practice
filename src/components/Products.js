function Products(props){
    return(
        <div>
            <ul style={{listStyleType:"none"}}>
                {props.products.map((product) =>
                 <li style={{display:"inline-block"}} key={product.id}>{product.name}
                <img src={product.src} height="150" width="200" /> <br/>
                </li> )}
            </ul>
        </div>
    );
}
export default Products;