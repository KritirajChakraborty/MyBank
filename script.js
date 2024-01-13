'use strict';
// Data
const account1 = {
  owner: 'Kritiraj Chakraborty',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Kaustav Kar',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Subhankar Paul',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Anugrahit Paul',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Shaheb Alo Paul',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 5555,
};

const account6 = {
  owner: 'Rohan Sonar',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 6666,
};
const account7 = {
  owner: 'Maitrish Dev',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 7777,
};
const account8 = {
  owner: 'Jahir Ahmed Choudhury',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 8888,
};
const account9 = {
  owner: 'Loiyumba Singha',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 9999,
};
const account10 = {
  owner: 'Udit Deb',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 1010,
};
const account11 = {
  owner: 'Sagrik Dutta',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 1011,
};
const account12 = {
  owner: 'Ronak Kar',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 1012,
};
const account13 = {
  owner: 'Swaraj G Paul',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 1013,
};
const account14 = {
  owner: 'Bipratip Deb',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 1014,
};
const account15 = {
  owner: 'Avinab Das',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 1015,
};
const account16 = {
  owner: 'Saurav Roy',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 1016,
};
const account17 = {
  owner: 'Sarfaraz Kazi',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 1017,
};
const account18 = {
  owner: 'Parikshit Chakraborty',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 1018,
};
const account19 = {
  owner: 'Seemanto Chakraborty',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 1019,
};
const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
  account8,
  account9,
  account10,
  account11,
  account12,
  account13,
  account14,
  account15,
  account16,
  account17,
  account18,
  account19,
];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const hideLogInfo = document.querySelector('.log');

//Buttons
const btnLogin = document.querySelector('.login__btn');
const btnLogout = document.querySelector('.logout__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

//Inputs
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputLogoutUsername = document.querySelector('.logout__input--user');
const inputLogoutPin = document.querySelector('.logout__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
//
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type 
          movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}₹</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsernames = function (acc) {
  acc.forEach(acc => {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => {
        return name[0];
      })
      .join('');
  });
};
createUsernames(accounts);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance}₹`;
};

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}₹`;
  const out = acc.movements

    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}₹`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(cur => cur >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}₹`;
};
const updateUI = function (acc) {
  //display movements
  displayMovements(acc.movements);
  //display balance
  calcDisplayBalance(acc);
  //display summary
  calcDisplaySummary(acc);
};

/////////////////////////////////////////////////////
//EVENT HNADLERS
//LOGIN IMPLEMENT
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); //prevents from submitting form
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log();

    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});
//LOGOUT IMPLEMENTATION
btnLogout.addEventListener('click', function (e) {
  e.preventDefault(); //prevents from submitting form
  currentAccount = accounts.find(
    acc => acc.username === inputLogoutUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLogoutPin.value)) {
    console.log();

    labelWelcome.textContent = 'User Sign In';

    containerApp.style.opacity = 0;

    inputLogoutUsername.value = inputLogoutPin.value = '';
    inputLogoutPin.blur();
  }
});
//TRANSFER IMPLEMENT
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);

    recieverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});
//loan from bank
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add amount
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});
//close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    accounts.splice(index, 1);
    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
//sort button
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
