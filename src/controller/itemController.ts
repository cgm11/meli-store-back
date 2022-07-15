import axios from "axios"
import { ITEM_URL } from "../utils/constants"
import { getCategories } from "./categoriesController"
import { transformInfoItem, formatPrice } from "../utils/functions"

export const getItem = async (req: any, res: any) => {
  const params = req.params
  try {
    const itemData = await axios.get(`${ITEM_URL}${params.id}`)
    const descriptionData = await axios.get(
      `${ITEM_URL}${params.id}/description`
    )

    const result = transformInfoItem(itemData.data, descriptionData.data)

    // Search categories by category_id
    const categoryPath = await getCategories(result.categories[0])
    result.categories = categoryPath

    // format price and split decimals
    const price = formatPrice(result.item.price)    
    result.item.price = price    

    res.status(200).json({
      status: "Success",
      data: result,
    })
  } catch (e) {
    res.status(400).json({
      status: "Error",
      data: `Error: ${e}`,
    })
  }
}
