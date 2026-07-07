import "./Dashboard.css"
function Dashboard(){
    return(
        <div className="dashboard">
            <h1 className="head">Welcome Back</h1><br></br>
        
        <div className="cards">
            <div className="card1">
                <h3>250</h3>
                <p>Total Students</p>
            </div>
            <div className="card2">
                <h3>35</h3>
                <p>companies</p>
                </div>
                <div className="card3">
                    <h3>180</h3>
                    <p>Placed</p>
                    </div>
                <div className="card4">
                    <h3>70</h3>
                    <p>Pending</p>

                </div>
            </div>
            

        </div>
    );
}
export default Dashboard;