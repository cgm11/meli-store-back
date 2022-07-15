import { ItemDetails, Items, Price } from "../types"
import { NAME, LASTNAME } from "./constants"

export const transformInfoItems = (data: any) => {
  const result: Items = {
    author: {
      name: NAME,
      lastname: LASTNAME,
    },
    categories: data.results.map((item: any) => {
      return item.category_id
    }),
    items: data.results.map((item: any) => {
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
      }
    }),
  }
  return result
}

export const transformInfoItem = (itemData: any, detailData: any) => {
  const result: ItemDetails = {
    author: {
      name: NAME,
      lastname: LASTNAME,
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
  }
  return result
}

export const mostRepeatedCategory = (myArray: string[]) =>
  myArray.reduce(
    (a, b, _i, arr) =>
      arr.filter((v) => v === a).length >= arr.filter((v) => v === b).length
        ? a
        : b,
    ""
  )

export const formatPrice = (price: Price) => {
  const changeFormat = price.amount.toLocaleString('us', { style: 'currency', currency: price.currency })
  const decimals = changeFormat.split(',')[1] || '00'
  const amount = changeFormat.split(price.currency)[1].split(',')[0] || ' 000'
  
  return {
    currency: price.currency,
    amount: amount.substring(1),
    decimals: decimals   
  }
}
