// PLEASE BE ADVISED THIS IS AN IMPROV CODE :D 
// refactor, using 10 best practices

// let instead of var
let customerInfo = {
    address: 'Calea X 26',
  };
  
  function processOrder(customerInfo, basket, options) {
    // 'isValidAddress' instead of 'validateAddress'
    const isValidAddress = vldAddr(customerInfo.address);
    
    //'if (! isValidAddress) {...}' instead of 'if (isValidAddress === false) {...}'
    if (! isValidAddress) {
      return;
    }
  
    applyDiscount(basket.totalPrice);
  
    if (options.paymentMethod.cash) {
      pay(customerInfo.creditCard);
    }

    //template literals instead of concatenating with '+'
    return 'Dear ${customerInfo.name}, you order has been placed successfully. Carrier service: ${options.carrier}';
  }
  
  function pay(cardDetails) {
    validate_card_details(cardDetails);
    const status = makePayment();  
  
    //strict equality '===' instead of '=='
    if(status === 'ok') {
      return true;
    } else if (status === 'wrong input') {
      return false;
    } else if (status === 'network err') {
      throw new Error('some error :(');
    }
  }
  
  function validate_card_details(card) {
    if (card.expiryDate > Date.now()) {
      validateName();
      validateCardNumber();
      validateIssuer();
      validateMerchant();
      // some random code, don't mind
      maxLength = Math.max.apply(null, cardType.lengths);
      if (options.maxLength) {
        maxLength = Math.min(options.maxLength, maxLength);
      }
    } else {
      return false;
    }
  }
  
  // 'postalCode || address.line1' instead of 'postalCode ? postalCode : address.line1'
  function vldAddr(address) {
    return postalCode || address.line1;
  }
  
  function applyDiscount(basket) {
    if (basket.price > 200) {
      //combined ifs instead of nested ones  
      if (basket.coupons && basket.coupons.tenOff) {
          totalPrice -= 10/100 * totalPrice;
      }
    } else {
      return basket.price;
    }
  }