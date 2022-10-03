import { Route, Routes } from 'react-router-dom'

import { AuthLayout } from '../layouts'
import { Login } from '../pages'

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path='*' element={<Login />} />
            </Route>
        </Routes>
    )
}

{/*         <Route path="register" element={<Register />} />
<Route path="confirmEmail/:token" element={<ConfirmEmail />} />
<Route path="recovery-password" element={<ResetPassword />} />
<Route path="resetpassword/:token" element={<NewPasword />} /> */}