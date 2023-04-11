import React from 'react'

export default function Popup({ children, outsideClick }) {
    return (
        <div style={{
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            boxSizing: "border-box",
        }}>
            <div
                onClick={outsideClick}
                style={{
                    position: "fixed",
                    backgroundColor: "gray",
                    opacity: 0.4,
                    height: "100%",
                    width: "100%",
                    zIndex: -1
                }} ></div>
            {children}
        </div>
    )
}
