import { useForm } from "react-hook-form"
import { ButtonDark, LinkDark } from "../components";

const ShippingForm = ({submit}) => {
    const { register, handleSubmit, errors} = useForm()

    const onSubmit = (data) => {
        submit(data)
    }

    return ( 
        <>
            <h1 className="text-xl mb-6 font-semibold">Shipping Details</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-8 mb-4">
                    <div className="flex flex-col w-2/4">
                        <label htmlFor="first-name" className="mb-1">First Name</label>
                        <input type="text" name="first-name" id="first-name" className="py-2 px-4 outline-none" ref={register}/>
                    </div>
                    <div className="flex flex-col w-2/4">
                        <label htmlFor="last-name" className="mb-1">Last Name</label>
                        <input type="text" name="last-name" id="last-name" className="py-2 px-4 outline-none" ref={register}/>
                    </div>
                </div>
                <div className="flex gap-8 mb-4">
                    <div className="flex flex-col w-2/4">
                        <label htmlFor="street" className="mb-1">Street Address</label>
                        <input type="street" name="street" id="street" className="py-2 px-4 outline-none" ref={register}/>
                    </div>
                    <div className="flex flex-col w-2/4">
                        <label htmlFor="email" className="mb-1">Email Address</label>
                        <input type="email" name="email" id="email" className="py-2 px-4 outline-none" ref={register}/>
                    </div>
                </div>
                <div className="flex gap-8 mb-4">
                    <div className="flex flex-col w-2/4">
                        <label htmlFor="city" className="mb-1">City</label>
                        <input type="city" name="city" id="city" className="py-2 px-4 outline-none" ref={register}/>
                    </div>
                    <div className="flex flex-col w-2/4">
                        <label htmlFor="zipcode" className="mb-1">Zip Code</label>
                        <input type="zipcode" name="zipcode" id="zipcode" className="py-2 px-4 outline-none" ref={register}/>
                    </div>
                </div>
                <div className="flex gap-8 mb-4 justify-between">
                    <LinkDark to="/cart" text="Back" type="outlined"/>
                    <ButtonDark text="Continue"/>
                </div>
            </form>
        </>
     );
}
 
export default ShippingForm;