import { createSlice } from "@reduxjs/toolkit";

interface WorkersType {
  name: string;
  lastName: string;
}

interface InitialStateType {
  workers: WorkersType[];
  searchedSideWorker: string;
  searchedTopNavWorker: string;
}

const initialState: InitialStateType = {
  workers: [],
  searchedSideWorker: "",
  searchedTopNavWorker: "",
};

const workersSlice = createSlice({
  name: "workers",
  initialState,
  reducers: {
    setWorkers(state, action) {
      state.workers = action.payload.workers;
    },
    sortWorkersByLastNameASC(state) {
      state.workers.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
    },
    sortWorkersByLastNameDSC(state) {
      state.workers.sort((a, b) => (a.lastName < b.lastName ? 1 : -1));
    },
    sortWorkersByNameASC(state) {
      state.workers.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    sortWorkersByNameDSC(state) {
      state.workers.sort((a, b) => (a.name < b.name ? 1 : -1));
    },
    setSearchedWorker(state, action) {
      if (action.payload.type === "sideNav") {
        state.searchedSideWorker = action.payload.worker;
      } else if (action.payload.type === "topNav") {
        state.searchedTopNavWorker = action.payload.worker;
      }
    },
  },
});

export const workersActions = workersSlice.actions;

export default workersSlice;
