import './TopInfoPannel.css';
import User from '../../../../images/user.png'

const TopInfoPannel = () => {
    return (
        <div className="TopInfoPannel">
            <div className="infoSection">
                <img src={User} alt="UserImage" />
                <div className="name">
                    DevilDynasty
                    <div className="status">
                        🟢 Online
                    </div>
                </div>

            </div>

            <button className="callBtn"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#615EF0" d="M19.95 21q-3.125 0-6.175-1.363t-5.55-3.862q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.338t.712-.062l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3Z" /></svg> Call</button>

        </div>
    )
}

export default TopInfoPannel;