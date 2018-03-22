class Layout extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="full">
                    <div className="half r" style={{float:"left"}}></div>
                    <div className="half b" style={{float:"right"}}></div>
                </div>
                <div className="full">
                    <div className="half g" style={{float:"left"}}></div>
                    <div className="half y" style={{float:"right"}}></div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Layout/>, document.getElementById("entry"));