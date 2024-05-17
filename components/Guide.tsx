import Image from "next/image"

const Guide = () => {
    return (
        <section className="flexCenter flex-col">
            <div className="padding-container max-container w-full pb-24">
                <Image
                    src="/route.png"
                    alt="camp"
                    width={58}
                    height={58}
                />
                <p className="capitalize regular-14 -mt-1 mb-3 text-blue-70">
                    We are here for you
                </p>
                <div className="flex flex-wrap justify-between gap-5 lg:gap.10">
                    <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
                        Effortlessly guiding your path
                    </h2>
                    <p className="regular-16 text-gray-30 xl:max-w-[520px]">
                        Our app seamlessly guides users through their glamping journey in
                        Colombia. Whether they're seasoned travelers or new to glamping,
                        our user-friendly interface ensures that everyone can embark on their
                        adventure with ease, making every step of the journey a breeze.
                    </p>
                </div>
            </div>

            <div className="flexCenter max-container relative w-full">
                <Image
                    src="/paddle-board.jpg"
                    alt="boat"
                    width={1440}
                    height={500}
                    className="w-full object-cover object-center 2xl:rounded-5xl"
                />

                <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl
                border shadow-md md:left-[5%] lg:top-20">
                    <Image
                        src="/meter.svg"
                        alt="meter"
                        width={16}
                        height={158}
                        className="h-full w-auto"
                    />
                    <div className="flexBetween flex-col">
                        <div className="flex w-full flex-col">
                            <div className="flexBetween w-full">
                                <p className="regular-16 text-gray-20">
                                    Destination
                                </p>
                                <p className="bold-16 text-green-50">
                                    52 minutes
                                </p>
                            </div>
                            <p className="bold-20 mt-2">
                                El Retiro BubbleSky
                            </p>
                        </div>

                        <div className="flex w-full flex-col">
                            <p className="regular-16 text-gray-20">
                                Start track
                            </p>
                            <h4 className="bold-20 mt-2 whitespace-nowrap">
                                Cascada Tequendamita
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Guide
