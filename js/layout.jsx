class Layout extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="full">
                <div id="nav_bar"></div>
                <div className="page">
                    <div className="pageHalf left r"></div>
                    <div className="pageHalf right b"></div>
                </div>
                <div className="page">
                    <div className="pageHalf left g"></div>
                    <div className="pageHalf right y"></div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Layout/>, document.getElementById("entry"));