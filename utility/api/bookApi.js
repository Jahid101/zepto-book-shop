import { Constants } from "@/utility/constants";
import axios from "axios";

export const booksAPIs = {
    getAllBook: async (filters = null) => {
        const data = await axios({
            url: Constants.Api.books.books,
            method: "GET",
            params: { ...filters, page: filters?.page + 1 },
            // headers: {
            //     authorization: 'Bearer' + ' ' + token,
            // },
        })
        return data?.data;
    },
    getBookById: async (bookId) => {
        const data = await axios({
            url: Constants.Api.books.books + bookId,
            method: "GET",
        })
        return data.data;
    },

}
