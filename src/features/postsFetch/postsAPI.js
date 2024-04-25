import Axios from "../../util/Axios";

export const postsAPI = async () => {
    const rqs = await Axios.get('/blogs');
    return rqs.data;
}