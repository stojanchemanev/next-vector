import Products from "@/components/Products";

export default async function Home() {
    // const data = await fetch("http://localhost:3000/api/users");
    // const posts = await data.json();

    // console.log("posts", posts);

    return (
        <div className="">
            <Products />
        </div>
    );
}
