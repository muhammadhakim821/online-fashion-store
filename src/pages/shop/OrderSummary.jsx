import { useSelector } from "react-redux"


const  OrderSummary = ()=>{
    const products = useSelector((store) => store.cart.products)
    const {selectedtItems ,totalPrice, tax, taxtRate, grandTotal} = useSelector((store) => store.cart.products)
    return(
        <>
        <div className="bg-primary-light mt-5 rounded text-base">
            <div className="px-6 py-4 space-y-5">
                <h2 className="text-xl text-text-dark">Order Summary </h2>
                <p className="text-text-dark mt-2"> SelectedItems: {selectedtItems}</p>
                <p>Total Price : ${totalPrice.toFixed(2)}</p>
            </div>
        </div>
        </>
    )

}

export default OrderSummary