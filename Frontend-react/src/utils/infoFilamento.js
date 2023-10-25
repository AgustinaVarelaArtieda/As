import axios from "axios";

async function infoFilamento () {
    try {
        const response = await axios.get("/filamentos");
        return response.data;
    }
    catch (error) {
        //reemplazar esto por alert
        throw new Error(error.message);
    }
}

export default infoFilamento