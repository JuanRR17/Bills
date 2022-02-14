import React from 'react';
import { BrowserRouter as Router, 
    Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import ContactPage from './pages/ContactPage';
import EditClientPage from './pages/EditClientPage';
import ClientsListPage from './pages/ClientsListPage';
import BillsListPage from './pages/BillsListPage';
import NewBillPage from './pages/NewBillPage';
import NewClientPage from './pages/NewClientPage';
import BillPreviewPage from './components/NewBill/BillPreviewPage';
import BillViewPage from './pages/BillViewPage';

const App = () => {
    return (
            <Router>
                <Routes>

                    <Route path="/" element={<ClientsListPage/>} />
              
                    <Route path="/newClient" element={<NewClientPage/>} />
                    <Route path="/editClient" element={<EditClientPage/>} />
                    <Route path="/billsList" element={<BillsListPage/>} />
                    <Route path="/newBill" element={<NewBillPage/>} />
                    <Route path="/billPreview" element={<BillPreviewPage/>} />
                    <Route path="/contact" element={<ContactPage/>} />
                    <Route path="/billView" element={<BillViewPage/>} />
           
                    <Route path = "*" element={<NotFoundPage/>}/>
                </Routes>       
            </Router>
    )
};

export default App;
