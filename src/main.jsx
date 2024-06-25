import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import DepositeForm from './pages/FormSubmission/DepositeForm'
import LoanForm from './pages/FormSubmission/LoanForm'
import ContactForm from './pages/FormSubmission/ContactForm'
import JobForm from './pages/FormSubmission/JobForm'
import App from './App'
// import Layout from './layout.jsx'
// import Home from './pages/home/home.jsx'
// import DepositeScheme from './pages/depositeScheme/depositeScheme.jsx'
// import LoanScheme from './pages/Loan_page/loanScheme.jsx'
// import BankingServices from './pages/bankingService/bankingServices.jsx'
// import Contact from './pages/contact/contact.jsx'
// import Branches from './pages/branches/branches.jsx'
// import AboutUs from './pages/about/aboutUs.jsx'
// import Gallery from './pages/gallery/gallery.jsx'
// import JobProfile from './pages/jobProfile/jobProfile.jsx'


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/DepositeForm' element={<DepositeForm/>} />
        <Route path='/LoanForm' element={<LoanForm/>} />
        <Route path='/ContactForm' element={<ContactForm/>} />
        <Route path='/JobForm' element={<JobForm/>} />
       
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)