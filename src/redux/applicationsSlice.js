import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";

const getApplications = () => {
    const applications = Array(6).fill(null)

    return applications.map(() => {
        return {
            fullname: faker.person.fullName(),
            email: faker.internet.email(),
            date: faker.date.recent().toString().slice(0, 21),
            title: faker.person.jobTitle(),
            status: faker.helpers.arrayElement(["Accepted", "In-Review", "Rejected"])
        }
    })
}

const applications = getApplications()

const applicationsSlice = createSlice({
    name: "applications",
    initialState: {
        applications
    },
    reducers: {
        setApplications: (state, action) => {
            state.applications = action.payload
        }
    }
})

export default applicationsSlice.reducer