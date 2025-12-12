
export default function Footer() {
    return (
        <>        <footer className='bg-secondary text-white' style={{ minHeight: '100px' }}>
            <div className='row'>
                <h4 className='mt-4 bg-secondary text-white ms-3'>se hai bisogno contattaci su:</h4>
                <div className="d-flex justify-content-center" style={{
                    color: 'white'
                }}>
                    <i className="bi bi-envelope me-3"></i>
                    <i className="bi bi-facebook me-3"></i>
                    <i className="bi bi-twitter-x me-3"></i>
                    <i className="bi bi-instagram me-3"></i>
                    <i className="bi bi-telephone me-3"></i>
                </div>
            </div>

        </footer>
        </>

    )
}
