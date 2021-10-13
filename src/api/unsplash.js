import axios from "axios"

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers : {
        Authorization:"Client-ID 0c63fe7b881ce0ce70fee55e6628e9eb89b227da52bfc335f67e94a55806497e"
    }
});
