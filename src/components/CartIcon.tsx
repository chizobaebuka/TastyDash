import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
    return (
        <Link href="/cart" className='flex gap-4 items-center'>
            <div className='relative w-8 h-8 md:w-5 md:h-5'>
                <Image src="/cart.png" alt="" fill />
            </div>
            <span>Cart (5)</span>
        </Link>
    )
}

export default CartIcon