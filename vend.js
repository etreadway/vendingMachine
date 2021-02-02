// This is the vending machine object
var vendingMachine = {
  snacks: {
    snickers: 1,
    gushers: 0.5,
    gum: 0.25,
    chips: 1.5,
    soda: 2,
    water: 1,
  },
  wallet: 0,
  bag: [],
};

// this returns all the items and prices in a money format
function menu() {
  for (var snack in vendingMachine.snacks) {
    console.log(snack + ": $" + vendingMachine.snacks[snack].toFixed(2));
  }
}

// this checks to make sure that you are putting in money and stores it in a wallet
function pay(money) {
  if (typeof money == "number") {
    vendingMachine.wallet += money;
  } else {
    console.log("You need to pay with money you lunatic!");
  }
}

// allows user to select items and deducts money from your wallet
function select(item) {
  if (vendingMachine.snacks[item] == undefined) {
    console.log(
      "We are all out of " + item + ". Please choose something else."
    );
  } else {
    if (vendingMachine.wallet >= vendingMachine.snacks[item]) {
      console.log("You have selected: " + item);
      vendingMachine.wallet -= vendingMachine.snacks[item];
      vendingMachine.bag.push(item);
    } else {
      console.log("You don't have enough money for this.");
    }
  }
}

// allows the user to get there change
function change() {
  if (vendingMachine.wallet > 0) {
    var money = vendingMachine.wallet;
    console.log("Your change is: $" + money.toFixed(2));
    vendingMachine.wallet = 0;
    return money;
  } else {
    console.log("You have no change.");
  }
}

// allows user to eat whats in the bag
function eat() {
  while (vendingMachine.bag.length > 0) {
    console.log("Consume " + vendingMachine.bag[0]);
    console.log("Nom nom nom...");
    vendingMachine.bag.shift();
  }
}

menu();
pay(5);
select("chips");
select("gum");
select("water");
change();
eat();