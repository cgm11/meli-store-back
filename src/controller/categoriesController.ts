import axios from "axios"
import { Category } from "../types"
import { CATEGORIES_URL } from "../utils/constants"

export const getCategories = async (idCategory: string) => {
    const categories = []
  
    try {
      // Get category path
      const data = await axios.get(`${CATEGORIES_URL}${idCategory}`)
      data?.data?.path_from_root.forEach((category: Category) =>
        categories.push(category.name)
      )
    } catch (e) {
      categories.push(idCategory)
    }
  
    return categories
  }