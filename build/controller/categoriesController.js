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
exports.getCategories = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../utils/constants");
const getCategories = (idCategory) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const categories = [];
    try {
        // Get category path
        const data = yield axios_1.default.get(`${constants_1.CATEGORIES_URL}${idCategory}`);
        (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.path_from_root.forEach((category) => categories.push(category.name));
    }
    catch (e) {
        categories.push(idCategory);
    }
    return categories;
});
exports.getCategories = getCategories;
