import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";

const chartsSlice = createSlice(
    {
        name: "charts",
        initialState: {
            userChart: [
                {
                    x: "Jan",
                    y: 4000,
                },
                {
                    x: "Feb",
                    y: 3000,
                },
                {
                    x: "Mar",
                    y: 5000,
                },
                {
                    x: "Apr",
                    y: 4000,
                },
                {
                    x: "May",
                    y: 3000,
                },
                {
                    x: "Jun",
                    y: 2000,
                },
                {
                    x: "Jul",
                    y: 4000,
                },
                {
                    x: "Agu",
                    y: 3000,
                },
                {
                    x: "Sep",
                    y: 4000,
                },
                {
                    x: "Oct",
                    y: 1000,
                },
                {
                    x: "Nov",
                    y: 4000,
                },
                {
                    x: "Dec",
                    y: 3000,
                }
            ].map(({ x }) => ({ x, y: faker.number.int({ min: 777, max: 2500 }) }))
        },
        reducers: {
            setUserChart: (state, action) => {
                state.userChart = action.payload;
            }
        }
    }
)

export default chartsSlice.reducer