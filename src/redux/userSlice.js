import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";

const getUser = () => {
    return {
        fullname: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.string.numeric({ length: 10, min: 6000000000, max: 9999999999 })
    }
}

const user = getUser()

const userSlice = createSlice(
    {
        name: "user",
        initialState: user,
        reducers: {
            setUser: (state, action) => {
                return action.payload
            }
        }
    }
)

export default userSlice.reducer
export const { setUser } = userSlice.actions