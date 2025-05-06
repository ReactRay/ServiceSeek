import { Outlet } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { useEffect } from "react";
import { usePostStore } from "../store/post.store";


export function Layout() {

    const { getPosts } = usePostStore()

    useEffect(() => {
        async function fetchPosts() {
            await getPosts()
        }
        fetchPosts()
    }, [])


    return <div className="layout-container">

        <div className="layout-item">
            <LandingPage />
        </div>
        <div className="layout-item">
            <Outlet />
        </div>


    </div>;
}