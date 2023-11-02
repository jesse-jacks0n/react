import React from 'react';
import SmoothGraph from "../widgets/smoothGraph";

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
            {/*<SmoothGraph />*/}
        </div>
        <div className={"quick-access"}>
            <h1>Quick Access</h1>
            <div className={"quick-access-grid-container"}>
                <div className={"quick-access-grid-item"}>
                    <div className={"image-container1"}></div>
                    <div className={"quick-access-grid-item-content1"}>
                        <img src={"/images/picture.png"}/>
                        <span>Kernam Pool</span>
                        .jpg
                    </div>
                </div>
                <div className={"quick-access-grid-item"}>
                    <div className={"image-container2"}></div>
                    <div className={"quick-access-grid-item-content2"}>
                        <img src={"/images/play.png"}/>
                        <span>Amazing Pool</span>
                        .jpg
                    </div>
                </div>
                <div className={"quick-access-grid-item"}>
                    <div className={"image-container3"}></div>
                    <div className={"quick-access-grid-item-content3"}>
                        <img src={"/images/docs.png"}/>
                        <span>Family Pool</span>
                        .jpg
                    </div>
                </div>
            </div>
        </div>

    </div>;
}
