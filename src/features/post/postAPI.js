import Axios from "../../util/Axios";

export const postAPI = async (id) => {
    const rqs = await Axios.get(`/blogs/${id}`);
    return rqs.data;
}