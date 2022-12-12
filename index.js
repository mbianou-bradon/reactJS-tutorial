function ReactReason() {
    return(
        <header>
            <h2>Why I am learning ReactJS</h2>
            <ul>
                <li>It makes life easier</li>
                <li>It is a requirement for a front-end developer</li>
                <li>I kinda don't have choice</li>
            </ul>
        </header>
    )
}

ReactDOM.render (
    <ReactReason />,
    document.getElementById('root')
)