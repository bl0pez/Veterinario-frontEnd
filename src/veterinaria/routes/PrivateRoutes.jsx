import { Navigate, Route, Routes } from 'react-router-dom'
import { PrivateLayout } from '../layouts'
import { CambiarPassword, EditarPerfil, Dashboard } from '../pages'

export const PrivateRoutes = () => {
    return (
        <Routes >
            <Route path="/admin" element={<PrivateLayout />}>
                <Route path="pacientes" element={<Dashboard />} />
                <Route path="perfil" element={<EditarPerfil />} />
                <Route path="cambiar-password" element={<CambiarPassword />} />
            </Route>
            <Route path="*" element={<Navigate to="/admin/pacientes" />} />
        </Routes >
    )
}