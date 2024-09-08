import { bindActionCreators } from "@reduxjs/toolkit"
import { dispatch } from "./store"
import * as userActions from "./userSlice"
import * as jobsActions from './jobsSlice'

export const { setUser, setCompanyImages } = bindActionCreators({ ...userActions, ...jobsActions }, dispatch)