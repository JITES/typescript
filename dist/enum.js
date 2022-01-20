"use strict";
var Directions;
(function (Directions) {
    Directions[Directions["East"] = 0] = "East";
    Directions[Directions["West"] = 1] = "West";
    Directions[Directions["North"] = 2] = "North";
    Directions[Directions["South"] = 3] = "South";
})(Directions || (Directions = {}));
console.log(Directions.North);
var Cities;
(function (Cities) {
    Cities[Cities["Amsterdam"] = 1] = "Amsterdam";
    Cities[Cities["NewDelhi"] = 2] = "NewDelhi";
    Cities[Cities["Mumbai"] = 3] = "Mumbai";
    Cities[Cities["Bangalore"] = 4] = "Bangalore";
})(Cities || (Cities = {}));
console.log(Cities.Bangalore);
