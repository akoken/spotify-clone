import { getProviders, signIn } from "next-auth/react";

export default function Login() {
    return(
        <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
            <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="Spotify" />
                <div>
                    <button className="bg-[#18D860] text-white p-5 rounded-full"
                    onClick={() => signIn()}>
                        Login with Spotify
                    </button>
                </div>
        </div>
    );
}

export async function getServerSideProps(context){
    const providers = await getProviders();

    return {
        props: { providers },
    };
}