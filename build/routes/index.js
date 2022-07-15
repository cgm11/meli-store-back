"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const itemsController_1 = require("../controller/itemsController");
const itemController_1 = require("../controller/itemController");
const router = express_1.default.Router();
router.get('/', itemsController_1.getItems);
router.get('/:id', itemController_1.getItem);
exports.default = router;
