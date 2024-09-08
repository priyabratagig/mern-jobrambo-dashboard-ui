import { faker } from "@faker-js/faker";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getJobs = () => {
    const jobs = Array(7).fill(null)

    return jobs.map((_, idx) => ({
        jobid: faker.number.hex() + idx,
        company: faker.company.name(),
        title: faker.person.jobTitle(),
        logo: ''
    }))
}

export const setCompanyImages = createAsyncThunk('jobs/images', async (jobs) => {
    for (let jobIdx = 0; jobIdx < jobs.length; jobIdx++) {
        const job = jobs[jobIdx]
        let urlObject = null

        if (!job.logo) {
            try {
                const res = await fetch('https://loremflickr.com/640/480/startup&company&logo')
                const bolb = await res.blob()
                urlObject = URL.createObjectURL(bolb)
            }
            catch {
                urlObject = 'https://loremflickr.com/640/480/startup&company&logo'
            }

            const newJobs = [...jobs]
            newJobs[jobIdx] = { ...job, logo: urlObject }
            return newJobs
        }
    }

    return jobs
})

const jobs = getJobs()

const jobsSlice = createSlice(
    {
        name: "jobs",
        initialState: jobs,
        reducers: {
            setJobs: (state, action) => {
                state.jobs = action.payload
            }
        },
        extraReducers(builder) {
            builder.addCase(setCompanyImages.fulfilled, (state, action) => {
                return action.payload
            })
        }
    }
)

export default jobsSlice.reducer
export const { setJobs } = jobsSlice.actions