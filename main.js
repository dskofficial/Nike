// JavaScript code to enhance button interaction
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.product1 button');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const productName = button.parentNode.querySelector('h1').innerText;
        alert(`Your Order Successfully`);
      });
    });
  });
  