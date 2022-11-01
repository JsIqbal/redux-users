import axios from 'axios';

export const getUsers = async () => {
    let data = [];
    await axios.get("https://todo-app37.herokuapp.com/loadTodo")
        .then((res) => {
            data = res.data;
        }).catch((err) => {
            console.log(err);
        })

        return data;
}