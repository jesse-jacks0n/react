import React from 'react';

export default function DashboardContent() {
    return <div className={"dashboard"}>
        <div className={"search-bar"}>
            <div className={"search-bar-icon"}><img src={"/images/search.png"} alt={"icon"}/><p>Search Files</p></div>
            <div className={"filter-action"}>
                <div className={"vertical-bar"}></div>
                <p>Filter</p>

            </div>
        </div>
        <div className="grid-parent-container">
            <div className="grid-container">
                <div className="grid-item">
                    <div className={"grid-item-image"}><img src={"/images/play.png"} alt={"image"}/> Videos</div>
                    <h3>16</h3>
                </div>
                <div className="grid-item">
                    <div className={"grid-item-image"}><img src={"/images/picture.png"} alt={"image"}/> Images</div>
                    <h3>32</h3>
                </div>
                <div className="grid-item">
                    <div className={"grid-item-image"}><img src={"/images/docs.png"} alt={"image"}/> Documents</div>
                    <h3>24</h3>
                </div>
                <div className="grid-item">
                    <div className={"grid-item-image"}><img src={"/images/menu.png"} alt={"image"}/> More</div>
                    <h3>40</h3>
                </div>
            </div>
            <div className="visitors-container"></div>
        </div>
        <div className={"quick-access"}>
            <h1>Quick Access</h1>
            <div className={"quick-access-grid-container"}>
                <div className={"quick-access-grid-item"}></div>
                <div className={"quick-access-grid-item"}></div>
                <div className={"quick-access-grid-item"}></div>
            </div>
        </div>

    </div>;
}
