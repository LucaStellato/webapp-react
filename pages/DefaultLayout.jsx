import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useLoading } from "../src/LoadingContex";
import { Cardio } from 'ldrs/react'
import 'ldrs/react/Cardio.css'




export default function DefaultLayout({ children }) {
    const { loading } = useLoading()
    return (
        <> <Header />
            {loading && <div className="d-flex justify-content-center ms-3"> <Cardio

                size="150"
                stroke="4"
                speed="1"
                color="blue"
            />
            </div>

            }

            <Outlet />
            <Footer />


        </>
    )
}