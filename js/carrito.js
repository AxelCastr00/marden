document.addEventListener('DOMContentLoaded', function () {
  const cartItems = document.querySelectorAll('.cart-item');
  const subtotalElement = document.getElementById('subtotal');
  const discountElement = document.getElementById('discount');
  const deliveryFeeElement = document.getElementById('deliveryFee');
  const totalElement = document.getElementById('total');

  cartItems.forEach(item => {
      const quantityInput = item.querySelector('.quantity-control input');
      const incrementBtn = item.querySelector('.quantity-control button:nth-child(3)');
      const decrementBtn = item.querySelector('.quantity-control button:nth-child(1)');

      incrementBtn.addEventListener('click', () => {
          quantityInput.value = parseInt(quantityInput.value) + 1;
          updateSummary();
      });

      decrementBtn.addEventListener('click', () => {
          if (quantityInput.value > 1) {
              quantityInput.value = parseInt(quantityInput.value) - 1;
              updateSummary();
          }
      });

      quantityInput.addEventListener('change', () => {
          if (quantityInput.value < 1) {
              quantityInput.value = 1;
          }
          updateSummary();
      });
  });

  function updateSummary() {
      let subtotal = 0;
      cartItems.forEach(item => {
          const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
          const quantity = parseInt(item.querySelector('.quantity-control input').value);
          subtotal += price * quantity;
      });

      const discount = subtotal * 0.2;
      const deliveryFee = 15;
      const total = subtotal - discount + deliveryFee;

      subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
      discountElement.textContent = `-$${discount.toFixed(2)}`;
      deliveryFeeElement.textContent = `$${deliveryFee.toFixed(2)}`;
      totalElement.textContent = `$${total.toFixed(2)}`;
  }

  updateSummary();
});
