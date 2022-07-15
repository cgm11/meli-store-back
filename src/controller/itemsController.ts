import axios from "axios"
import { ITEMS_URL } from "../utils/constants"
import { getCategories } from "./categoriesController"
import { transformInfoItems, mostRepeatedCategory, formatPrice } from "../utils/functions"

export const getItems = async (req: any, res: any) => {
  const { q, limit } = req.query
  try {
    const data = await axios.get(
      `${ITEMS_URL}q=${q}&limit=${limit ? limit : "4"}`
    )
    const result = transformInfoItems(data?.data)

    const principalCategory = mostRepeatedCategory(result.categories)

    // Search categories by category_id
    const categoryPath = await getCategories(principalCategory)
    result.categories = categoryPath

    // format price and split decimals
    result.items.map((item) => item.price = formatPrice(item.price))

    res.status(200).json({
      status: "Success",
      data: result,
    })
  } catch (e) {
    res.status(400).json({
      status: "Error",
      data: `Error: ${e}`
    })
  }
}
