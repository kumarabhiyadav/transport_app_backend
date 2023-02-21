"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInvoice = void 0;
const Invoice_model_1 = require("./Invoice.model");
const createInvoice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, e_1, _b, _c;
    let { invoiceNo, customer, date, source, destination, advance, rides } = req.body;
    try {
        try {
            for (var _d = true, rides_1 = __asyncValues(rides), rides_1_1; rides_1_1 = yield rides_1.next(), _a = rides_1_1.done, !_a;) {
                _c = rides_1_1.value;
                _d = false;
                try {
                    const ride = _c;
                }
                finally {
                    _d = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = rides_1.return)) yield _b.call(rides_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        const invoice = yield Invoice_model_1.InvoiceModel.create({});
        if (invoice) {
            res.status(201).json({
                success: true,
                message: "Invoice created Successfull",
                result: invoice,
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: "Failed to create invoice",
                result: null,
            });
        }
    }
    catch (error) {
        res.status(201).json({
            success: false,
            message: "Failed to create invoice ",
            error: error,
        });
    }
});
exports.createInvoice = createInvoice;
