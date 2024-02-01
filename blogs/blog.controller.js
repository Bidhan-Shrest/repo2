const BlogModel = require("./blog.model");

const create = (payload) => {
    return BlogModel.create(payload);
};

const get = () =>{
    return BlogModel.find();
};

const getById = () => {
    return BlogModel.findOne({ id });
};

const updatedById= (id, payload) => {
    return BlogModel.updateOne({ id }, payload);
};

const deleteById = (id) => {
    return BlogModel.deleteOne({id});
};

module.exports = {create, get, getById, updatedById, deleteById};