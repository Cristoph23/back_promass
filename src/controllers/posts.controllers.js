import PostsModel from "../database/models/posts.model.js";

// Listar Posts
export const listAllPosts = async (req, res) => {
  try {
    const data = await PostsModel.findAll();
    res.json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Ver la informacion de un solo Post.
export const viewPost = async (req, res) => {
  try {
    const data = await PostsModel.findByPk(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Crear un post
export const createPost = async (req, res) => {
  try {
    const data = await PostsModel.create({
      title: req.body.title,
      author: req.body.author,
      content_post: req.body.content_post,
    });
    res.json({ data, message: "El Post fue creado correctamente." });
  } catch (error) {
    res.status(400).json(error);
  }
};

// Actualizar Post
export const updatePost = async (req, res) => {
  try {
    await PostsModel.update(
      {
        title: req.body.title,
        author: req.body.author,
        content_post: req.body.content_post,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.json({ message: "El Post fue actualizado correctamente." });
  } catch (error) {
    res.status(400).json(error);
  }
};

// Eliminar Post
export const deletePost = async (req, res) => {
  try {
    const user = await PostsModel.findByPk(req.params.id);
    await user.destroy();
    res.json({ message: "El Post fue eliminado correctamente." });
  } catch (error) {
    res.status(400).json(error);
  }
};
