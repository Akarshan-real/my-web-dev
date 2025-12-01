import React , {useEffect} from 'react'

const Navbar = (info) => {
    // Run on every render : Case 1
    useEffect(() => {
    alert("Hey I run on every render");
    })

    // Run only on first render : Case 2
    useEffect(() => {
    alert("Hey welcome to my page");
    }, [])


    // Run only on specific value change : Case 3
    useEffect(() => {
        alert("I am running cauze color was changed");
    }, [info.color])

    // Example of Cleanup function
    useEffect(() => {
        alert("Hey welcome to my app.jsx page");
        return () => {
            alert("Component was unmounted")
        }   
    }, [])
    
  return (
    <div>
      I am a navbar of {info.color} hehe..
    </div>
  )
}

export default Navbar
