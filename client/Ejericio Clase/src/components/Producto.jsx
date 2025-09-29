//Producto.jsx

function Producto({ name, price, discount=0, category }) {

    const precioConDescuento = price*(1-discount/100)
    
    return (
        <div className="product">
            <h1>{name}</h1>
            <p className="category">Categoría: {category}</p>
            
            {discount > 0 ? (
                <div>
                    <span className="original-price">${price}</span>
                    <span className="discounted-price">
                        ${precioConDescuento}
                    </span>
                    <span className="discount-badge">-{discount}%</span>
                </div>
            ) : (
                <p>${price}</p>
            )}
        </div>
    )
}

export default Producto