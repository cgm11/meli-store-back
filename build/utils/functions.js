"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPrice = exports.mostRepeatedCategory = exports.transformInfoItem = exports.transformInfoItems = void 0;
const constants_1 = require("./constants");
const transformInfoItems = (data) => {
    const result = {
        author: {
            name: constants_1.NAME,
            lastname: constants_1.LASTNAME,
        },
        categories: data.results.map((item) => {
            return item.category_id;
        }),
        items: data.results.map((item) => {
            return {
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: item.price,
                    decimals: item.decimals,
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
            };
        }),
    };
    return result;
};
exports.transformInfoItems = transformInfoItems;
const transformInfoItem = (itemData, detailData) => {
    const result = {
        author: {
            name: constants_1.NAME,
            lastname: constants_1.LASTNAME,
        },
        categories: [itemData.category_id],
        item: {
            id: itemData.id,
            title: itemData.title,
            price: {
                currency: itemData.currency_id,
                amount: itemData.price,
                decimals: itemData.decimals,
            },
            picture: itemData.thumbnail,
            condition: itemData.condition,
            free_shipping: itemData.shipping.free_shipping,
            sold_quantity: itemData.sold_quantity,
            description: detailData.plain_text,
        },
    };
    return result;
};
exports.transformInfoItem = transformInfoItem;
const mostRepeatedCategory = (myArray) => myArray.reduce((a, b, _i, arr) => arr.filter((v) => v === a).length >= arr.filter((v) => v === b).length
    ? a
    : b, "");
exports.mostRepeatedCategory = mostRepeatedCategory;
const formatPrice = (price) => {
    const changeFormat = price.amount.toLocaleString('us', { style: 'currency', currency: price.currency });
    const decimals = changeFormat.split(',')[1] || '00';
    const amount = changeFormat.split(price.currency)[1].split(',')[0] || ' 000';
    return {
        currency: price.currency,
        amount: amount.substring(1),
        decimals: decimals
    };
};
exports.formatPrice = formatPrice;
