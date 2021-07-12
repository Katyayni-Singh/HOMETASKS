console.log(rentalCarCost(1))
console.log(rentalCarCost(4))
console.log(rentalCarCost(9))

function rentalCarCost(d) {
    if (d < 3) {
        var cost = d * 40;
        return cost;
    } else if (d < 7) {
        var cost = d * 40 - 20;
        return cost;
    } else {
        var cost = d * 40 - 50;
        return cost;
    }

}