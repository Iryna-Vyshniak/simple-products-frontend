import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../share/api/products-service';
// import { getAllProducts } from '../../share/api/products-service';
// import { createProduct } from '../../share/api/products-service';
// import { getProductById } from '../../share/api/products-service';

export const getAllProductsThunk = createAsyncThunk(
  'products/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.getAllProducts();
      console.log('thunk all products', data);
      return data;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  }
);

export const addProductThunk = createAsyncThunk(
  'products/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.createProduct(data);
      console.log('DATA thunk result', result);
      return result;
    } catch ({ response }) {
      console.log(data);
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  }
);

export const getProductByIdThunk = createAsyncThunk(
  'products/id',
  async (id, { rejectWithValue }) => {
    try {
      const { data: result } = await api.getProductById(id);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);