// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/yasir5405')
    //     .then(res => res.json())
    //     .then(data => setData(data))
    //     .catch(err => console.error(err));
    // }, []);
  return (
    <div>Github username: {data.followers}</div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/google')
    return response.json();
}