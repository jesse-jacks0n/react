import React from "react";

export default function ActivityPanel() {
    return <div className="activity-panel">
        <div className="profile-container">
            <div className={"notification"}>
                <img src={"/images/bell.png"} alt={"icon"}/>
            </div>
            <div className={"profile-avatar"}>
                <img src={"/images/user.png"} alt={"icon"}/>

            </div>
            <div className={"profile-info"}>
                <p>
                    <span>Jonathan</span> <br/>jonathan@gmail.com
                </p>
            </div>
        </div>
        <p className={"activity"}>Activity</p>
        <div className={"activity-container"}>
            <div className={"activity-date-container"}>
                <div className={"activity-date-data"}>
                    <p><span>24170</span><br/>From 12 Oct - 18 Oct</p>

                </div>
                <div className={"date-icon"}>
                    <img src={"/images/chart.png"} alt={"icon"}/>
                </div>
            </div>
            <div className={"graph-statistics"}>
                <div className={"day-holder"}>
                    <div className={"monday"}></div>
                    <div className={"date-day"}>12<br/>Oct</div>
                </div>
                <div className={"day-holder"}>
                    <div className={"tuesday"}></div>
                    <div className={"date-day"}>13<br/>Oct</div>
                </div>
                <div className={"day-holder"}>
                    <div className={"wednesday"}></div>
                    <div className={"date-day"}>14<br/>Oct</div>
                </div>
                <div className={"day-holder"}>
                    <div className={"thursday"}></div>
                    <div className={"date-day"}>15<br/>Oct</div>
                </div>
                <div className={"day-holder"}>
                    <div className={"friday"}></div>
                    <div className={"date-day"}>16<br/>Oct</div>
                </div>
                <div className={"day-holder"}>
                    <div className={"saturday"}></div>
                    <div className={"date-day"}>17<br/>Oct</div>
                </div>
                <div className={"day-holder"}>
                    <div className={"sunday"}></div>
                    <div className={"date-day"}>18<br/>Oct</div>
                </div>

            </div>
            <div className={"ingress-engress-container"}>
                <div className={"engress"}>
                    <div className={"upload"}>
                        <img src={"/images/upload.png"} alt={"icon"}/>
                    </div>
                    <div className={"upload-data"}>
                        <p>
                            Uploads <br/><span>24170</span>
                        </p>
                    </div>
                </div>
                <div className={"ingress"}>
                    <div className={"download"}>
                        <img src={"/images/download.png"} alt={"icon"}/>
                    </div>
                    <div className={"download-data"}>
                        <p>
                            Downloads <br/><span>24170</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className={"shared-cloud"}>
            <p><span>Shared Cloud</span></p>
            <p>+ Add New</p>
        </div>
        <div className={"shared-cloud-container"}>
            <div className={"cloud-one"}>
                <div className={"cloud-one-icon"}></div>
                <div className={"cloud-one-data"}>
                    <p>
                        <span>Turu.com</span><br/>helio@turu.com
                    </p>
                </div>
            </div>
            <div className={"cloud-two"}>
                <div className={"cloud-two-icon"}></div>
                <div className={"cloud-two-data"}>
                    <p>
                        <span>Pahe.ph</span><br/>gas@pahe.ph
                    </p>
                </div>
            </div>
        </div>
    </div>;
}
  