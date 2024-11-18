import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className="font-bold text-5xl flex justify-between mt-12 pb-8 mb-8 border-b">
            <h1>Knowledge Cafe</h1>   
            <img src={profile} alt="" />       
        </div>
    );
};

export default Header;