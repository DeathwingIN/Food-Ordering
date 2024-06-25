import React from 'react'
import landingImage from '../assets/landing.png'
import appDownload from '../assets/appDownload.png'

export default function HomePage() {
    return (
        <div className={"flex flex-col gap-12"}>

            <div className={"bg-white rounded-lg shadow-md py-8  flex flex-col gap-5 text-center -mt-16"}>
                <h1 className={"text-5xl font-bold tracking-tight text-orange-600"}>Welcome to the FoodOrdering.com</h1>
                <span className={"text-xl"}>
                    Food is just a click away !
                </span>
            </div>

            <div className={"grid md:grid-cols-2 gap-5"}>
                <img src={landingImage} alt="landing" />
                <div className={"flex flex-col items-center justify-center gap-4 text-center"}>
                    <span className={"font-bold text-3xl tracking-tighther"}>
                        Order Your Favourite Food Even Faster
                    </span>
                    <span>
                        Download our app and get food delivered at your doorstep
                    </span>
                    <img src={appDownload} alt="appDownload"/>
                </div>
            </div>
        </div>
    )
}
