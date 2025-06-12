import React from 'react'
import Image from 'next/image'

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
    {/* product */}
    <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 xl:w-1/2 lg:px-20 ">
      {/* single */}
      <div className="flex items-center justify-between mb-4">
        <Image src="/temporary/p1.png" alt="" width={100} height={100}/>
        <div className="">
          <h1 className="uppercase text-xl font-bold ">Sicilian Pizza</h1>
          <span>Large</span>
        </div>
        <h2 className="font-bold">$79.90</h2>
        <span className="cursor-pointer">X</span>
      </div>

            <div className="flex items-center justify-between mb-4">
        <Image src="/temporary/p2.png" alt="" width={100} height={100}/>
        <div className="">
          <h1 className="uppercase text-xl font-bold">Bacon deluxe</h1>
          <span>Extra BBQ sauce</span>
        </div>
        <h2 className="font-bold">$29.90</h2>
        <span className="cursor-pointer">X</span>
      </div>

            <div className="flex items-center justify-between mb-4">
        <Image src="/temporary/p4.png" alt="" width={100} height={100}/>
        <div className="">
          <h1 className="uppercase text-xl font-bold">P.arrabbiata</h1>
          <span>Medium</span>
        </div>
        <h2 className="font-bold">$79.90</h2>
        <span className="cursor-pointer">X</span>
      </div>
    </div>
    {/* payment */}
    <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 xl:w-1/2">
      <div className="flex justify-between">
        <span className="">Subtotal (3 items)</span>
        <span className="">$81.70</span>
      </div>

      <div className="flex justify-between">
        <span className="">Service Cost</span>
        <span className="">$0.00</span>
      </div>

      <div className="flex justify-between">
        <span className="">Delivery Cost</span>
        <span className="text-green-500">FREE !</span>
      </div>

      <div className="flex justify-between">
        <span className="">TOTAL(INCL. VAT)</span>
        <span className="font-bold">$81.70</span>
      </div>
      <hr className="my-2" />
      <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">CHECKOUT</button>
    </div>
    </div>
  )
}

export default CartPage