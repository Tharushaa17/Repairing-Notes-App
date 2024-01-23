import React from 'react'
import { Link } from 'react-router-dom'

const DashHeader = () => {
  return (
    <header>
        <div>
            <Link to="/dash">
                <h1 className="text-3xl font-semibold text-center mb-5">Tech Notes</h1>
                <hr></hr>
            </Link>
            <nav className="dash-header__nav">
                {/* add nav buttons later */}
            </nav>
        </div>
    </header>
  )
}

export default DashHeader