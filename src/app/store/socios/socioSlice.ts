import { createSlice } from '@reduxjs/toolkit'

interface Socio {
    id: number;
    listSocios: any[];
}

interface SocioState {
    isLoadingSocios: boolean;
    activeSocio: Socio[];
    listSocios: Socio[];
    inicialSocio: any;
    messageSocicio: string;
}

const initialState: SocioState = {
    isLoadingSocios: false,
    activeSocio: [],
    listSocios: [],
    inicialSocio: [],
    messageSocicio: ''
}

export const socioSlice = createSlice({
    name: 'socio',
    initialState,
    reducers: {
        onLoadSocios: (state, action) => {
            state.isLoadingSocios = true;
            state.listSocios = action.payload;
        },
        onSetActiveSocio: (state, action) => {
            state.activeSocio = action.payload;
        },
        onAddSocio: (state, action) => {
            state.listSocios.push(action.payload);
        },
        onUpdateSocio: (state, action) => {
            state.listSocios = state.listSocios.map(socio => socio.id === action.payload.id ? action.payload : socio);
        },
        onDeleteSocio: (state, action) => {
            state.listSocios = state.listSocios.filter(socio => socio.id !== action.payload);
        },
        clearMessageSocio: (state) => {
            state.messageSocicio = '';
        }
    }
})

export const {
    onLoadSocios,
    onSetActiveSocio,
    onAddSocio,
    onUpdateSocio,
    onDeleteSocio,
    clearMessageSocio
} = socioSlice.actions
