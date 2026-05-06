import React from 'react'

const UseRef = () => {
    // `useRef` is a hook that allows you to create a mutable reference that persists across re-renders. It can be used to access DOM elements directly or to store any mutable value that you want to persist without causing a re-render.
    const username = useRef(null);
    const password = useRef(null);

    const handleForSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username.current.value);
        console.log('Password:', password.current.value);
    }
    return (
        <form onSubmit={handleForSubmit}>
            <input type="text" id="username" ref={username} />
            <input type="text" id="password" ref={password} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default UseRef