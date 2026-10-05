const customerName = "Budi";
const productPrice = 150000;
const quantity = 3;
const discountPercent = 10;
const shippingCost = 20000;

function calculateTotal(price, quantity, discount) {
    const subtotal = price * quantity;
    const discountAmount = subtotal * (discount / 100);
    const totalAfterDiscount = subtotal - discountAmount;

    return {
        subtotal: subtotal,
        discountAmount: discountAmount,
        totalAfterDiscount: totalAfterDiscount
    };
}

const calculateShipping = (total) => {
    return total >= 500000 ? 0 : shippingCost;
};

const result = calculateTotal(
    productPrice,
    quantity,
    discountPercent
);

const shipping = calculateShipping(result.totalAfterDiscount);
const totalPayment = result.totalAfterDiscount + shipping;

console.log(`
Customer: ${customerName}
Product Price: Rp${productPrice}
Quantity: ${quantity}
Subtotal: Rp${result.subtotal}
Discount: Rp${result.discountAmount}
After Discount: Rp${result.totalAfterDiscount}
Shipping: Rp${shipping}
Total Payment: Rp${totalPayment}
`);