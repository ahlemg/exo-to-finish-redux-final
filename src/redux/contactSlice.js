import {createSlice, createAsyncThunk}  from "@reduxjs/toolkit"
import contactsService from "../services/contacts";

export const fetchContacts = createAsyncThunk (
    "contacts/fetch",
    async () => {
        const resp = await contactsService.getAll();
        console.log("respppppppp::::", resp)
        return resp.data;
    }
);
export const createContact = createAsyncThunk (
    "contacts/create",
    async ({id, name, email}) => {
        const resp = await contactsService.create({id, name, email});
        return resp.data;

    }
);
export const updateContact = createAsyncThunk (
    "contacts/update",
    async ({id, contact}) => {
        const resp = await contactsService.update(id, contact);
        return resp.data;

    }
);
export const deleteContact = createAsyncThunk (
    "contacts/delete",
    async ({id}) => {
        const resp = await contactsService.remove(id);
        return resp.data;

    }
);

const initialState = [];

const contactSlice = createSlice({
name: "contact",
initialState,
extraReducers :(builder) => {
builder.addCase(fetchContacts.fulfilled , (state,action) => {
    return action.payload;
})

    builder.addCase(createContact.fulfilled, (state, action) => {
          return  state.push(action.payload);
      })
    
    builder.addCase(updateContact.fulfilled, (state, action) => {
        return state.map(x => {
           
            return (x.id ==  action.payload.id)? action.payload : x;
        } );
    })
  builder.addCase(deleteContact.fulfilled, (state, action) => {
        return  state.filter(x => x.id !=  action.payload.id);
    })
}


});

export default contactSlice.reducer;