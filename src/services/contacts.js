import api from "../api/contacts";

const getAll = () =>{
    return api.get("/contacts");
}
const create = (contact) =>{
    return api.post("/contacts" , contact);
}
const update = (id,contact) =>{
    return api.put(`/contacts/${id}`, contact);
}
const remove = (id) =>{
    return api.delete(`/${id}`);
}
const contactService = {
    getAll,
    create,
    update,
    remove

} 

export default contactService;