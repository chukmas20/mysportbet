import "./header.css";
export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm"> Bet Tips</span>
                <span className="headerTitleLg"> Blog</span>
            </div>
            <img 
                className="headerImg" src="https://images.unsplash.com/photo-1598120035994-6c6a8547c0ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGlvbmVsJTIwbWVzc2l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="palyer"
            />
        </div>
    )
}
