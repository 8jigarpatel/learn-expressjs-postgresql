"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var data_source_1 = __importDefault(require("./data/data-source"));
data_source_1.default
    .initialize()
    .then(function () {
    console.log('data source then');
})
    .catch(function (error) {
    console.error(error);
});
// Boot express
var app = (0, express_1.default)();
var port = 5000;
// Application routing
app.use('/', function (req, res) {
    res.status(200).send({ data: 'Hello World!' });
});
// eslint-disable-next-line no-console
app.listen(port, function () { return console.log("Server is listening on port ".concat(port, "!")); });
//# sourceMappingURL=index.js.map