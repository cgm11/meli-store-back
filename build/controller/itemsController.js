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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItems = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../utils/constants");
const categoriesController_1 = require("./categoriesController");
const functions_1 = require("../utils/functions");
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { q, limit } = req.query;
    try {
        const data = yield axios_1.default.get(`${constants_1.ITEMS_URL}q=${q}&limit=${limit ? limit : "4"}`);
        const result = (0, functions_1.transformInfoItems)(data === null || data === void 0 ? void 0 : data.data);
        const principalCategory = (0, functions_1.mostRepeatedCategory)(result.categories);
        // Search categories by category_id
        const categoryPath = yield (0, categoriesController_1.getCategories)(principalCategory);
        result.categories = categoryPath;
        // format price and split decimals
        result.items.map((item) => item.price = (0, functions_1.formatPrice)(item.price));
        res.status(200).json({
            status: "Success",
            data: result,
        });
    }
    catch (e) {
        res.status(400).json({
            status: "Error",
            data: `Error: ${e}`
        });
    }
});
exports.getItems = getItems;
