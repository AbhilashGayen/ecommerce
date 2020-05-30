export const addItemsToCart = (cartItems, cartItemToAdd) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.Id === cartItemToAdd.Id
  );

  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.Id === cartItemToAdd.Id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, {...cartItemToAdd, quantity: 1}]
};
