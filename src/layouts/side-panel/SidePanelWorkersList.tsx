import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// import Paginations from "./Paginations";

const SidePanelWorkersList = ({ sortValue }: any) => {
  const searchedSideWorker = useSelector(
    (state: any) => state.workers.searchedSideWorker
  );
  const workers = useSelector((state: any) => state.workers.workers);
  const [sliceIndex, setSliceIndex] = useState(0);

  const filteredSearchedWorkers = workers.filter((worker: any) => {
    if (searchedSideWorker === "") {
      return worker;
    } else if (
      worker.name.includes(searchedSideWorker.toLowerCase()) ||
      worker.lastName.includes(searchedSideWorker.toLowerCase())
    ) {
      return worker;
    }
  });

  return (
    <div className="side-panel__workers">
      <ul className="side-panel__workers-list">
        {filteredSearchedWorkers
          .slice(sliceIndex * 10, sliceIndex * 10 + 10)
          .map((worker: any) => {
            return (
              <li
                className="side-panel__workers-worker"
                key={worker.id}
                data-worker-id={worker.id}
              >
                <Link
                  to={"/single-worker/" + worker.id}
                  className="side-panel__workers-worker-link"
                >
                  <span className="side-panel__workers-worker-name">
                    {sortValue === "name"
                      ? `${worker.name} ${worker.lastName}`
                      : `${worker.lastName} ${worker.name}`}
                  </span>
                </Link>
              </li>
            );
          })}
      </ul>
      {/* {filteredSearchedWorkers.length > 10 && (
        <div className="side-panel__workers-pagination">
          <Paginations setSliceIndex={setSliceIndex} />
        </div>
      )} */}
    </div>
  );
};

export default SidePanelWorkersList;
