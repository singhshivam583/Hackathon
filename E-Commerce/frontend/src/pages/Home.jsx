import React, {useState, useEffect} from "react";


export default function Home() {

    const [username, setUsername] = useState({});
    const [state, setState] = useState(true);

    const callHomePage = async() => {
        try {
            const resData = await fetch(`/user/api/contact-data`,{
                method: "GET",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify()
            })
            .then((res) => res.json())
            .then((data) => {
                const user = data.user.fullName
                setUsername(user);
                return user
            });
            setState(false);
            // console.log(resData)
            // console.log(username)
        } catch (error) {
            setState(true)
            console.log("Error while fetching current-user ",error)
        }
    }

    useEffect(() => {
        callHomePage();
    }, [])

    return (
        <div className="mx-auto w-full my-16 max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 bg-gray-100">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            {state ? "WELCOME To " : `WELCOME ${username}`} 
                            <span className="block text-4xl">{state ? "e-Cart" : "Happy, to see you back"}</span>
                        </h2>  
                    </div>
                </div>
                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full pl-8 ">
                    <img className="w-96" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image1" />
                </div>
            </aside>
        </div>
    );
}
