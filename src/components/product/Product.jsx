import './Product.css';

const Product = (props) => {

    console.log(props.items);

    return (
        <div>
           {
               props.items.map((item, index)=>(
                   <div key={index}>
                        <h4>{item.name}</h4>
                        <img src={item.imageUrl} alt=""/>
                        <p>{item.description}</p>
                   </div>
               ))
           }
        </div>
    )
}

export default Product