const numberButtonsList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let numberButtonsHtml = '';
let darkThemeOn = false;

numberButtonsList.forEach((number) => {
  const buttonHtml = `
    <button id = button${number} class="number-button js-number-button button">${number}</button>
    
  `;
  document.querySelector('.js-number-buttons-div').innerHTML += buttonHtml;

});

document.querySelectorAll('.js-number-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.js-input-field').value += button.textContent;
  });
});


operationButtonHandler('plus');
operationButtonHandler('minus');
operationButtonHandler('multiply');
operationButtonHandler('divide');

equalsButtonHandler();
clearButtonHandler();
undoButtonHandler();

darkThemeSwitch();



//---------------- Functions---------------------


function clearButtonHandler() {
  document.querySelector('.js-clear-button').addEventListener('click', () => {
    document.querySelector('.js-input-field').value = '';
  });
};

function operationButtonHandler(buttonName) {
  document.querySelector(`.js-${buttonName}-button`).addEventListener('click', () => {
    const buttonContent = document.querySelector(`.js-${buttonName}-button`).textContent;
    document.querySelector('.js-input-field').value += buttonContent;
  });
};

function equalsButtonHandler() {
  document.querySelector('.js-equals-button').addEventListener('click', () => {
    const inputFieldValue = document.querySelector('.js-input-field').value;
    const result = eval(inputFieldValue);
    if (result != undefined) {
      document.querySelector('.js-input-field').value = result;
    } else {
      alert('result is undefined');
    }
  });
};

function undoButtonHandler() {
  document.querySelector('.js-undo-button').addEventListener('click', () => {
    let inputFieldValue = document.querySelector('.js-input-field').value;
    document.querySelector('.js-input-field').value = inputFieldValue.slice(0, inputFieldValue.length - 1);
  });
}

function darkThemeSwitch() {
  document.querySelector('.js-dark-theme-button').addEventListener('click', () => {
    let buttonElement = document.querySelectorAll('.button');
    let bodyElement = document.querySelector('body');
    if (darkThemeOn === false) {
      //document.body.style.backgroundColor = 'rgb(50, 50, 50)';
      bodyElement.classList.add('body-dark-theme');
      buttonElement.forEach((buttonIndex) => {
        buttonIndex.classList.add('button-dark-theme');
      });
      darkThemeOn = true;
      document.querySelector('.js-dark-theme-button').textContent = 'Switch to Light Theme';
    } else {
      bodyElement.classList.remove('body-dark-theme');
      buttonElement.forEach((buttonIndex) => {
        buttonIndex.classList.remove('button-dark-theme');
      });
      document.querySelector('.js-dark-theme-button').textContent = 'Switch to Dark Theme';
      darkThemeOn = false;
    };
  });
};
