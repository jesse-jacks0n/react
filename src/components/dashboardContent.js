import React from 'react';

export default function DashboardContent() {
    return <div className={"dashboard"}>
      <div className={"search-bar"}>
          <div className={"search-bar-icon"}> <img src={"/images/search.png"} alt={"icon"}/><p>Search Files</p></div>
          <div className={"filter-action"}>
              <div className={"vertical-bar"}></div>
              <p>Filter</p>

          </div>
      </div>
    </div>;
}
