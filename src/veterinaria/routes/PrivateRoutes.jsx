import { Navigate, Route, Routes } from 'react-router-dom'
import { PrivateLayout } from '../layouts'
import { EditarPerfil } from '../pages'
import { Dashboard } from '../pages/Dashboard'

export const PrivateRoutes = () => {
    return (
        <Routes >
            <Route path="/admin" element={<PrivateLayout />}>
                <Route path="pacientes" element={<Dashboard />} />
                <Route path="perfil" element={<EditarPerfil />} />
                <Route path="*" element={<Navigate to="/admin/pacientes" />} />
            </Route>
            <Route path="*" element={<Navigate to="/admin/pacientes" />} />
        </Routes >
    )
}

{/* <Route path="perfil" element={<EditarPerfil />} />
<Route path="cambiar-password" element={<CambiarPassword />} /> */}