import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Slide from './components/Slide';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlType from './components/GIType';
import CustomNav from './account/CustomNav';
import PersonalInfo from './account/PersonalInfo';
import ChangePassword from './account/ChangePassword';
import BusinessInfo from './account/BusinessInfo';
import Documents from './account/Documents';
import UpgradePlan from './account/UpgradePlan';
import MainErp from './header/MainErp';
import LocalPurReact from './products/LocalPurReact';
import CurrExchange from './products/CurrExchange';
import ProductGroup from './products/ProductGroup';
import ProductCategory from './products/ProductCateory';
import ProductCode from './products/ProductCode';
import ProductSubCategory from './products/ProductSubCategory';
import AddProduct from './products/AddProduct';
import ViewProject from './products/ViewProject';
import CategoryList from './stores/CategoryList';
import TopBar from './components/TopBar';
import SubCategoryList from './stores/SubCategoryList';
import AddStore from './stores/AddStore';
import StoreInfo from './stores/StoreInfo';
import ProductCodeList from './products/ProductCodeList';

const App = () => {
  return (
    <>
    <TopBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/top' element={<TopBar/>}/>
          <Route path='/' element={<Slide />} />
          <Route path='/gtyp' element={<GlType />} />
          <Route path='/acc' element={<CustomNav />} />
          <Route path='/personalinfo' element={<PersonalInfo />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/business" element={<BusinessInfo />} />
          <Route path="/document" element={<Documents />} />
          <Route path="/upgradeplan" element={<UpgradePlan />} />
          <Route path='/erp' element={<MainErp/>}/>
          <Route path='/pur' element={<LocalPurReact/>}/>
          <Route path='/curr' element={<CurrExchange/>}/>
          <Route path='/productgroup' element={<ProductGroup/>}/>
          <Route path='/procat' element={<ProductCategory/>}/>
          <Route path='/procode' element={<ProductCode/>}/>
          <Route path='/prosubcat' element={<ProductSubCategory/>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/viewproduct' element={<ViewProject/>}/>
          <Route path='/catlist' element={<CategoryList/>}/>
          <Route path='/subcatlist' element={<SubCategoryList/>}/>
          <Route path='/addstore' element={<AddStore/>}/>
          <Route path='/storeinfo' element={<StoreInfo/>}/>
          <Route path='/procodelist' element={<ProductCodeList/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App