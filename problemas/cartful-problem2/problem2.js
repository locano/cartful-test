let form = document.querySelector('#product_form_6553738543222');

form.addEventListener('click', (event) => {
  event.preventDefault();
  // Adding Script logic
  let product = event.srcElement.firstChild.data;
  let cleanProduct = product.replace(/(\r\n|\n|\r| )/gm, "");


  switch (cleanProduct) {
    case '18-24months':
      createMessate();
      break;
    case '2T':
      createMessate();
      break;
    case '3T':
      createMessate();
      break;
    default:
      removeMessage();
      break;
  }
});

function createMessate() {

  let find = document.getElementById('result-message');

  if (find) {
    find.remove();
  }

  let message = document.createElement('p');
  message.id = 'result-message';
  message.innerHTML = 'Add 2 of this product and the third one is free.';
  message.style.backgroundColor = '#D0EBE7';
  message.style.color = 'black';
  let parent = document.getElementById('afterpay-messaging-widget');
  if (parent) {
    parent.append(message);
  }
}

function removeMessage() {
  let find = document.getElementById('result-message');
  if (find) {
    find.remove();
  }
}