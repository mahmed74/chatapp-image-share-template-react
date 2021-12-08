import React from 'react'
import { ChatPage } from './ChatPage'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import "../App.css"

export const Homepage = () => {
    return (
        <div className="homepage">
            <Sidebar/>
            <ChatPage/>
        </div>
    )
}
