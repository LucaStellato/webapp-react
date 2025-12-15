export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">Welcome to movie list</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active text-white" aria-current="page" href="http://localhost:5173">Home</a>
                            <a className="nav-link text-white" href="#">Contacts</a>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}