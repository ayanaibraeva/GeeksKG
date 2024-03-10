import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: [
        {
            coordinates: [74.61811438713715, 42.87919317266435],
            name: 'Бишкек',
            phoneNumbers: ['+996 (557) 05 2018', '+996 (507) 05 2018', '+996 (777) 05 2018'],
            email: ['office@geeks.kg'],
            address: ['ул. Ибраимова 103, БЦ “Victory']
        },
        {
            coordinates: [72.8029780887637, 40.51929011367899],
            name: 'Ош',
            phoneNumbers: ['+996 (557) 05 2018', '+996 (507) 05 2018', '+996 (777) 05 2018'],
            email: ['office@geeks.kg'],
            address: ['ул. Мырзалы Аматова 1Б, БЦ Томирис, цокольный этаж (здание Визион)']
        },
        {
            coordinates: [73.8454663713542, 42.812391524971154],
            name: 'Кара-Балта',
            phoneNumbers: ['+996 (557) 05 2018', '+996 (507) 05 2018', '+996 (777) 05 2018'],
            email: ['office@geeks.kg'],
            address: ['ул. Кожомбердиева 112, напротив Сах. завода, выше здания Олимпик']
        }
    ],
    selectedCity: null
};

initialState.selectedCity = initialState.contacts[0];

const ContactsSlice = createSlice({
    name: 'contactsReducer',
    initialState,
    reducers: {
        selectCity: (state, action) => {
            state.selectedCity = action.payload
        }
    },
});

export const { selectCity } = ContactsSlice.actions;

export default ContactsSlice.reducer;