# Notes

## From Project
- Already in Redux
  - mapStateToProps
  - mapStateToDispatch
- Hooks
  - useSelector
  - useDispatch

## From Video

Documentation - https://react-redux.js.org/next/api/hooks

Still wrap with provider store

New `useSelector()`

- import from react-redux
- arguments: function, equality function
- `state => state.counter` or `state => state.todos[props.id]`

Used with functional component - **** need another so we can do this one as refactor
```javascript
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login, setToken } from "./store/authentication";

const LoginPanel = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const token = useSelector(state => state.authentication.token)
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        //dispatch(login(email, password))  <= thunk way
        const newToken = login(email, password)
        dispatch(setToken(newToken))
    }

    if (token) {
        return <Redirect to="/" />
    }

    render(
        <main>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       placeholder="Email"
                       value={email}
                       onChange={e => setEmail(e.target.value)} />
                <input type="password"
                       placeholder="Password"
                       value={password}
                       onChange={e => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </main>
    );
}

export default LoginPanel;
```

Login is async function that returns a token
```javascript
...

export const login = async (email, password) => {
    const response = await fetch(`${baseUrl}/session`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.strignify({ email, password }),
    });
    
    if (response.ok) {
        const { token } = await response.json();
        window.localStorage.setItem(TOKEN_KEY, token);
        return token;
    }
};
```

Included in refactor - undoing thunk
(skipping in this reading/video - could be subject for a different lesson )

Finishing points
- Simpler than mapStateToProps and mapStateToDispatch
- Hooks are designed to use with function-based components
- These redux hooks are very similar to useContext() hook
