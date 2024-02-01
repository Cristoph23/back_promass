import { DataTypes } from "sequelize";
import sequelize from "../../configs/connectionDB.js";

const PostsModel = sequelize.define("posts", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING
    },
    author: {
        type: DataTypes.STRING
    },
    content_post: {
        type: DataTypes.STRING
    },
})

export default PostsModel