import { Constants } from "@/utility/constants";
import axios from "axios";

export const booksAPIs = {
    getAllBook: async (filters = null) => {
        const data = await axios({
            url: Constants.Api.books.books + `?page=${filters?.page + 1}`,
            method: "GET",
            // headers: {
            //     authorization: 'Bearer' + ' ' + token,
            // },
        })
        return data?.data;
    },
    getBookById: async (bookId) => {
        const data = await axios({
            url: Constants.Api.books.books + '/' + bookId,
            method: "GET",
        })
        return data.data;
    },

}
