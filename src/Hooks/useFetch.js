import { useState, useEffect } from "react"

const useFetch = (url, method) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [err, setErr] = useState(null)

    useEffect(() => {

        // const abortCont = new AbortController();

        fetch(url, {method})
        .then((res) => {
            if (!res.ok) {
                throw Error('Cannot fetch the data..')
                setIsPending(false)
            }
            return res.json()
        })
        .then((data) => {
            setData(data)
            setIsPending(false)
            setErr(null)
        })
        .catch(err => {
            console.error(err)
            setErr(err)
            })
        // return abortCont.abort;
    }, [])

    return { data, isPending, err }
};

export default useFetch;